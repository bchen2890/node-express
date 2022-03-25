//immediate are executed after I/O events callbacks
setImmediate(()=> {
    setImmediate(() => console.log('immediate',1));
    setImmediate(() => {
        console.log('immediate',2);
        setImmediate(() => console.log('immediate',3));
    });
});

console.log('Message executed before immediate');

//Repeat after every t ms
setInterval(()=> {
    return console.log('interval');
}, 1000);

