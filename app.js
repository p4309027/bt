const fs = require("fs");
const sr = require('./sr/status_report');

const file = process.argv[2] || 'input.txt';
var input='';
var output='';


// read the input file
// use synchronous approach to ensure the file is read completely
// and store the file data
input = fs.readFileSync(file, 'utf8');

output = sr(input);

for (let i = 0; i < output.length; i++) {
	console.log(output[i]);
}