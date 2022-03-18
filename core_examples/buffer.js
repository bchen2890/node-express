//Initializes a empty buffer (with bytes of zero)
const emptyBuffer = Buffer.alloc(16);
console.log("emptyBuffer:",emptyBuffer);
//Buffer with integers representing bytes
const numberBuffer = Buffer.from([8, 2, 3, 7, 4, 9]);
console.log("numberBuffer:",numberBuffer);
//Buffer with binary encoding in UTF-8
const stringBuffer = Buffer.from("Hello World", 'utf-8');
console.log("stringBuffer:", stringBuffer);

//Write data to buffer
emptyBuffer.write("Hello", "utf-8");
console.log("write to emptyBuffer:", emptyBuffer);
//Insert data at a position
emptyBuffer.write(" World", 5, "utf-8");
console.log("insert into emptyBuffer:", emptyBuffer);

//Change a byte
emptyBuffer[12] = "!".charCodeAt();
//Convert to string
console.log("emptyBuffer to String:", emptyBuffer.toString('utf-8'));

//Get number of bytes
console.log("length of emptyBuffer:", emptyBuffer.length)
console.log("byteLength of emptyBuffer:", Buffer.byteLength(emptyBuffer));

//Copy buffer
var copyBuffer = Buffer.from('aaaabbbbaaaabbbb');
emptyBuffer.copy(copyBuffer);
console.log("copy:",copyBuffer.toString());

//Compare buffers
console.log("compare:",Buffer.compare(emptyBuffer, copyBuffer));