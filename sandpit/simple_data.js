"use strict";

// A

let studentData = [
    {name: 'Bob', id: 0, 'scores': [68, 75, 76, 81]},
    {name: 'Alice', id: 1, 'scores': [75, 90, 64, 88]},
    {name: 'Carol', id: 2, 'scores': [59, 74, 71, 68]},
    {name: 'Dan', id: 3, 'scores': [64, 58, 53, 62]},
];

// B

function processStudentData(data, passThreshold, meritThreshold) {
	
	passThreshold = typeof passThreshold !== 'undefined' ? passThreshold: 60;
	meritThreshold = typeof meritThreshold !== 'undefined' ? meritThreshold: 75;
	
	data.forEach(function (sdata) {
		
		/*
		The reduce() method applies a function against an accumulator and
		each value of the array (from left-to-right) to reduce it to a single value
		 */
		
		let scoreSum = sdata.scores.reduce(function (prev, current) {
			return prev + current;
		}, 0);
		
		let average = scoreSum / sdata.scores.length;
		
		sdata.average = average;
		
		if (average > meritThreshold) {
			sdata.assessment = 'passed with merit';
		}
		else if (average > passThreshold) {
			sdata.assessment = 'passed';
		}
		else {
			sdata.assessment = 'failed';
		}
		
		console.log(`${sdata.name}'s (id: ${sdata.id}) final assessment is:` +
		            `${sdata.assessment.toUpperCase()}`)
		
	})
	
}

// E

console.log(Array.isArray(studentData));

processStudentData(studentData);