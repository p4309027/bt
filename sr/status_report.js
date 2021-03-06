
function SR(input) {

	// objects to track the master and worker nodes
	var masterNodes = {};
	var workerNodes = {};

	var linesAsArray = [];
	var output = [];
	var lastObj = ['0', '1', '2'];

	// Line formatter for output
	function formatLine(arr) {
		return arr.toString().replace(/,/g, ' ');
	}

	// Error Message helper
	function errorMsgHelper(msg, errLine) {
		output.push(`ERROR: ${msg}, please check following line: '${formatLine(errLine)}'`);
		return output;
	}

	// Line to Array converter
	function setupLine(line) {
		// convert each line into array
		line = line.split(' ');
		// last item index
		let last = line.length-1;
		// remove 'Carriage Return' (\r) from end of line
		line[last] = line[last].replace(/\r/g, '');
		return line;
	}

	// Line modifier
	function modifyLine(line, message, status, target) {
		// message index
		let mIndex = line.indexOf(message);
		// master node name
		let master = line[mIndex - 1];
		// worker node name
		let worker = line[mIndex + 1];

		if (target === true && worker == undefined) {
			return errorMsgHelper('Slave node is missing', line);
		}

		// this is for 'HELLO' case
		// if worker is 'undefined' assign it with master
		worker = worker || master;

		if (!workerNodes[worker]){		
			if (masterNodes[worker]){
				line = masterNodes[worker];
				line.splice(0, 2, worker, 'ALIVE');
			} else if((line[0] > lastObj[2]) && !masterNodes[worker]){
				line.unshift(worker, 'UNKNOWN');
				line.splice(3, 1);
				masterNodes[master] = line;
			} else {
				// update the status of a node
				line.unshift(worker, status);
				// remove node generated time-stamp
				line.splice(3, 1);
				if (!masterNodes[master]) masterNodes[master] = line;
			}
			output.push(formatLine(line));
			workerNodes[worker] = line;
			lastObj = line;
		}
	}


	// check the file if it's empty or not
	if (input == '') {
		output.push('The file is empty');
		return output;
	}
	// split the file by lines and convert it into array
	var lines = input.split('\n');

	// convert each line into array
	for (let line of lines) {	
		linesAsArray.push(setupLine(line));
	}
	// re-arrange the array by network synchronised time
	linesAsArray.sort(function(a, b){return b[1]-a[1]});

	// iterate each line of the file
	// and output the outcome
	for (let line of linesAsArray) {
		// inspect each line
		if (line.includes('HELLO')) {
			modifyLine(line, 'HELLO', 'ALIVE');
		} else if (line.includes('FOUND')) {
			modifyLine(line, 'FOUND', 'ALIVE', true);
		} else if (line.includes('LOST')) {
			modifyLine(line, 'LOST', 'DEAD', true);
		} else {		
			return errorMsgHelper('No activity is recorded', line);
		}
	}

	return output;
}

module.exports = SR;