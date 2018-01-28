const {describe, it} = require('mocha');
const { expect } = require('chai');

const fs = require('fs');
const SR = require('../sr/status_report');

describe(`'Status-report' module test`, () => {
	it(`should notify, if the file is empty`, () => {
		const sr = SR(''); 
		expect(sr).to.be.an('array').that.includes('The file is empty');		
	});
	it(`should return error message if a line doesn't have a keyword: HELLO, FOUND and LOST`, () => {
		const sr = SR('abcdef'); 
		expect(sr).to.be.an('array').that.includes("ERROR: No activity is recorded, please check following line: 'abcdef'");		
	});
	it(`should return 'ALIVE' message if a node says 'HELLO'`, () => {
		const sr = SR('1508405807560 1508405807504 vader HELLO'); 
		expect(sr).to.be.an('array').that.includes("vader ALIVE 1508405807560 vader HELLO");		
	});
	it(`should return 'DEAD' message if a node is lost`, () => {
		const sr = SR('1508405807468 1508405807480 luke LOST leia'); 
		expect(sr).to.be.an('array').that.includes("leia DEAD 1508405807468 luke LOST leia");		
	});	
	it(`should return 'ALIVE' message if a node finds 'worker' node`, () => {
		const sr = SR('1508405807467 1508405807479 luke FOUND r2d2'); 
		expect(sr).to.be.an('array').that.includes("r2d2 ALIVE 1508405807467 luke FOUND r2d2");		
	});
});
