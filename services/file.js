const fs = require('fs');

var file = {
    readFile: (req, res) => {
        console.time('readFile()')

        fs.readFile('assets/hello.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(data)
            console.log(data);
        })
        console.timeEnd('readFile()')

    },
    promiseFile: (req, res) => {
        return new Promise((resolve, reject) => {
            fs.readFile('assets/hello.txt', (err, data) => {
                if (err) {
                    reject(err);  // calling `reject` will cause the promise to fail with or without the error passed as an argument
                    return;        // and we don't want to go any further
                }
                resolve(data);
            });
        });
    }
};

module.exports = file;