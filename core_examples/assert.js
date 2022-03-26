const assert = require("assert");
let x = 2;
let y = 5;

//assert(x == y);
//assert gives an assertion error 
function check(condition, condMessage) {
    try {
        assert(condition, console.log( condMessage, 'test passed'));
    }
    catch {
        console.log(x, 'is', condMessage, y);
    }
}

check(x == y, 'not equal to' )
check(x < y, 'greater than')
y = 2
assert.equal(x, y);

function checkStrict(x, y) {
    try {
        assert.deepStrictEqual(x, y);
        console.log('strictEqual', x, y);
    }
    catch {
        console.log('strictEqual error', x, y);
    }
}

let obj1 = { a: '2' };
let obj2 = { a: 2 };
checkStrict(obj1, obj2)
obj2.a = '2'
checkStrict(obj1, obj2)

function match(line, match) {
    try {
        assert.match(line, match);
        console.log (match, 'matched');
    }
    catch {
        console.log('match error', match);
    }
}

let line = 'matching a word';
match(line, /word/);
match(line, /abc/);





