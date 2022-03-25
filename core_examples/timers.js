// Immediate are executed after I/O events callbacks
setImmediate(()=> {
    setImmediate(() => console.log('immediate',1));
    setImmediate(() => {
        console.log('immediate',2);
        setImmediate(() => console.log('immediate',3));
    });
});

console.log('Message executed before immediate');

// Cancel a immediate
var immediate = setImmediate(function A() {
    console.log('immediate2 not canceled');
});
console.log('immediate2 canceling...');
clearImmediate(immediate,
    console.log('immediate2 canceled')
);

var timeout = 2500;

// Executed one after t ms 
setTimeout(() => {
    console.log('timeout1', timeout, 'ms');
}, timeout);

// Cancel a timeout
var st = setTimeout(() => {
    console.log('timeout2 not canceled', timeout, 'ms');
}, timeout);

clearTimeout(st, console.log('timeout2 canceled'));


var interval = 1000;

// Repeat after every t ms
var si = setInterval(() => {
    console.log('interval every', interval, 'ms');
}, interval);

// Cancel a interval
setTimeout(() => {
    console.log('interval canceled')
    clearInterval(si);
}, 5000);


