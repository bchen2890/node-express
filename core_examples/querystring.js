var qs = require('querystring');
var parse = qs.parse("name=Binhui&surname=Chen&surname=Zhou");
console.log('name:', parse.name);
console.log('surname:', parse.surname);
console.log('object: ', parse);

var string = qs.stringify({ name: 'Binhui', surname: ['Chen','Zhou'] });
console.log('stringify: ', string);
var escaped = qs.escape(string)
console.log('escape:', escaped)
console.log('unescaped:', qs.unescape(escaped))




