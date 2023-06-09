const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/planes');

const testingFramework = new TestingFramework;

let actual, expected, result, airport, plane;

console.log('Test 1 - given a Plane to add to the Airport planes array');
console.log('========================================================');
console.log('');

// Arrange
expected = 1;
airport = new Airport();
plane = new Plane();

// Act
airport.addPlaneToAirport(plane);
actual = airport.planes.length;
console.log('💻 ~ file: airport.spec.js:19 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 1 - added plane object to planes array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport, plane = undefined;


console.log('Test 2 - can only add a plane to the airport planes array if it has an id');
console.log('========================================================');
console.log('');

// Arrange
expected = 0;
airport = new Airport();
let planeWithoutId = new Plane();

// Act
airport.addPlaneToAirport(planeWithoutId);
actual = airport.planes.length;
console.log('💻 ~ file: airport.spec.js:19 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 1 - added plane object to planes array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport, plane = undefined;
