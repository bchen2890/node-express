var util = require('util');

//Formatted string
var name = 'Binhui',
    number = 9,
    jsonHW = { str1: 'Hello', str2: 'World' };
var format1 = util.format('Name %s ', name);
var format2 = util.format('Number %d,', number);
var format3 = util.format('JSON %j', jsonHW);
console.log(format1);
console.log(format2);
console.log(format3);

util.log('Timestamp');

