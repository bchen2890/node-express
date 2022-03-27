const os = require('os');
console.log('---CPU architecture:', os.arch());
console.log('---logical CPU core:', os.cpus());
console.log('---operating system-specific constants:', os.constants);
console.log('---file path of the null device:', os.devNull);
console.log('---endianness of the CPU:', os.endianness());
console.log('---priority for the process 0:', os.getPriority(0));
console.log('---current user\'s home directory:', os.homedir());
console.log('---host name:', os.hostname());
console.log('---load averages(only for Unix):', os.loadavg());
console.log('---network interfaces:', os.networkInterfaces());
console.log('---OS platform whick Node.js was compiled:', os.platform());
console.log('---operationg system:', os.release());
console.log('---default directory for temporary files:', os.tmpdir());
console.log('---amount of free system memory in bytes:', os.freemem());
console.log('---total amount of system memory in bytes:', os.totalmem());
console.log('---OS name:', os.type());
console.log('---system uptime in seconds:', os.uptime());
console.log('---currently effective user:', os.userInfo());
console.log('--- kernel version:', os.version());



