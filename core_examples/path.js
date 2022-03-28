const path = require('path');

const txtPath = '../assets/test.js';
console.log('Basename:', path.basename(txtPath));

console.log('Basename without extension:', path.basename(txtPath, '.js'));

console.log('Path delimiter:',path.delimiter);

console.log('Path:',process.env.PATH);

console.log('Path splitted:', process.env.PATH.split(path.delimiter));

console.log('Directory name:', path.dirname(txtPath));

console.log('Extension:', path.extname(txtPath));

const formatPath = path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
});

console.log('Path format:', formatPath);
function isAbsolute(filepath) {
    console.log(filepath, 'is absolute:', path.isAbsolute(filepath));

}

isAbsolute(txtPath);
isAbsolute('//controllers');
isAbsolute('\\controllers');
isAbsolute('C:/temp/');
isAbsolute('C:\\temp');
isAbsolute('..');
isAbsolute('.');
isAbsolute('controllers/');

console.log('Path join:', path.join('/temp','foo'));

console.log('Path normalize:', path.normalize('temp/foo/.'));

console.log('Path parse:', path.parse('C:\\path\\dir\\file.txt'));

console.log('Path relative:', path.relative('C:\\temp\\foo1\\aaa', 'C:\\temp\\foo2\\bbb')
);

