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
    debugTimer("--------------------------");

}, delay);

debug('this message is sent after but appeared defore timer');



// Get a string representation of the object

// Object
const exampleObject = {};
exampleObject.a = [exampleObject];
exampleObject.b = [['a', ['b']], 'c', 'd'];
exampleObject.b.obj = {
    e: {}
};
exampleObject.b.obj.e.f = {};

const { inspect } = require('util');
console.log('INSPECT');

//Default parameters
console.log(" showHidden: false, depth:2, colors:false ---", inspect(exampleObject));

console.log(" showHidden: true, depth:0, colors:false ---", inspect(exampleObject, true, 0));

console.log(" showHidden: false, depth:0, colors:true ---", inspect(exampleObject, false, 0, true));

console.log(" passing parameters in JSON format ---", inspect(exampleObject, { depth: 0, colors: true }));

console.log(" showHidden: false, depth:3, colors:true ---", inspect(exampleObject.b, { depth: 3, colors: true }));

class exampleClass {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}

console.log(" inspect class ---", inspect(new exampleClass('example', 2), { colors: true }));

console.log("--------------------------");

//util.types for some type checks
const check = util.types
console.log('[] is ArrayBuffer: ', check.isArrayBuffer([]));
console.log('[] is AnyArrayBuffer: ', check.isAnyArrayBuffer([]));
console.log('[] is ArrayBufferView: ', check.isArrayBufferView([]));

console.log('{} is AnyArrayBuffer: ', check.isAnyArrayBuffer({}));
console.log('{} is ArrayBufferView: ', check.isArrayBufferView({}));


console.log('new Array() is AnyArrayBuffer: ', check.isAnyArrayBuffer(new Array()));
console.log('new Array() is ArrayBufferView: ', check.isArrayBufferView(new Array()));

console.log('new ArrayBuffer() is ArrayBuffer: ', check.isArrayBuffer(new ArrayBuffer()));
console.log('new ArrayBuffer() is isAnyArrayBuffer: ', check.isAnyArrayBuffer(new ArrayBuffer()));
console.log('new ArrayBuffer() is ArrayBufferView: ', check.isArrayBufferView(new ArrayBuffer()));

console.log('new SharedArrayBuffer() is ArrayBuffer: ', check.isArrayBuffer(new SharedArrayBuffer()));
console.log('new SharedArrayBuffer() is AnyArrayBuffer: ', check.isAnyArrayBuffer(new SharedArrayBuffer()));
console.log('new SharedArrayBuffer() is ArrayBufferView: ', check.isArrayBufferView(new SharedArrayBuffer()));

console.log('Buffer.from(\'b\') is ArrayBufferView: ', check.isArrayBufferView(Buffer.from('b')));
console.log('Buffer.from(\'b\') is AnyArrayBuffer: ', check.isAnyArrayBuffer(Buffer.from('b')));

console.log('new Int8Array() is ArrayBufferView: ', check.isArrayBufferView(new Int8Array()));
console.log('new Int8Array() is AnyArrayBuffer: ', check.isAnyArrayBuffer(new Int8Array()));

console.log('false is BooleanObject:', check.isBooleanObject(false)); 
console.log('true is BooleanObject:', check.isBooleanObject(true));
console.log('new Boolean(false) is BooleanObject:', check.isBooleanObject(new Boolean(false)));
console.log('new Boolean(true) is BooleanObject:', check.isBooleanObject(new Boolean(true)));

console.log('\'2022 - 03 - 23\' is Date:', check.isDate('2022-03-23'));
console.log('new Date() is Date:', check.isDate(new Date()));
console.log('new Date(\'2022 - 03 - 23\') is Date:', check.isDate(new Date('2022-03-23')));

console.log('/[a-z]/ is RegExp:', check.isRegExp(/[a-z]/));
console.log('new RegExp(\'[a - z] *\')) is RegExp:', check.isRegExp(new RegExp('[a-z]*')));
console.log('{} is RegExp:', check.isRegExp({}))






