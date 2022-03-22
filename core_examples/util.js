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

console.log("--------------------------");
//Print message with timestamp
util.log('Timestamp');

console.log("--------------------------");


// Message using debuglog(), with alias debug(), are hidden by default. These messages will appear when NODE_DEBUG match with their module name.

// set module name 'debug'
const debug = util.debug('debug');
// run with "SET NODE_DEBUG=debug*&&node util.js" to see this message
debug('debugging [%d]', 123);

//run with "SET NODE_DEBUG=hello&&node util.js"
const debugHello = util.debug('hello');
debugHello('hello from my debugger [%d]', 123);


//run with "SET NODE_DEBUG=debug*&&node util.js"
const debugTimer = util.debug('debug-timer');
const delay = 50;

setTimeout(() => {
    debugTimer('timer with delay %d ms', delay);
    console.log("--------------------------");

}, delay);

debug('this message is sent after but appeared defore timer');



