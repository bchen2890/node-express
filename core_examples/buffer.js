//Initializes a empty buffer (with bytes of zero)
const emptyBuf = Buffer.alloc(16);
console.log('emptyBuf:',emptyBuf);
//Buffer with integers representing bytes
const numberBuf = Buffer.from([8, 2, 3, 7, 4, 9]);
console.log('numberBuf:',numberBuf);
//Buffer with binary encoding in UTF-8
const stringBuf = Buffer.from('Hello World', 'utf-8');
console.log('stringBuf:', stringBuf);

//Write data to buffer
emptyBuf.write('Hello', 'utf-8');
console.log('write to emptyBuf:', emptyBuf);
//Insert data at a position
emptyBuf.write(' World', 5, 'utf-8');
console.log('insert into emptyBuf:', emptyBuf);

//Change a byte
emptyBuf[12] = '!'.charCodeAt();
//Convert to string
console.log('emptyBuf to String:', emptyBuf.toString('utf-8'));
//Convert to JSON
console.log('concat buffers:', emptyBuf.toJSON());

//Get number of bytes
console.log('length of emptyBuf:', emptyBuf.length)
console.log('byteLength of emptyBuf:', Buffer.byteLength(emptyBuf));

//Copy emptyBuf to copyBuf
var copyBuf = Buffer.from('aaaabbbbaaaabbbb');
emptyBuf.copy(copyBuf);
console.log('copy to copyBuf:', copyBuf.toString());
var otherBuf = Buffer.from('aaaabbbb');
//Copy from a position
copyBuf.copy(otherBuf, 4);
console.log('copy to otherBuf at position 4:', otherBuf.toString());

//Compare buffers
console.log('compare emptyBuf and copyBuf:', Buffer.compare(emptyBuf, copyBuf));
console.log('compare emptyBuf and otherBuf:', Buffer.compare(emptyBuf, otherBuf));

//Concat buffer
var arr = [emptyBuf, otherBuf];
var concatBuf = Buffer.concat(arr);
var concatBufWithLength = Buffer.concat(arr, 18);

console.log('concat buffers:', concatBuf.toString());
console.log('concat buffers with length:', concatBufWithLength.toString());

