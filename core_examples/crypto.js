const crypto = require('crypto');

const ENCRYPTION_KEY = 'aaaabbbbaaaabbbbaaaabbbbaaaabbbb'; // Must be 32 characters
const IV_LENGTH = 16; // 16 for AES, this is always 16
var iv = crypto.randomBytes(IV_LENGTH);

function encrypt(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return encrypted.toString('hex');
}

function decrypt(text) {
    let encryptedText = Buffer.from(text, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}

function hash(text) {
    const hash = crypto.createHash('sha256', ENCRYPTION_KEY)
        .update(text)
        .digest('hex');

    return hash;
}

var encrypted = encrypt(Buffer.from('Hello'))
console.log('encrypted text:', encrypted);
console.log('decrypted text:', decrypt(encrypted));
console.log('hash text:', hash("Hello World"));