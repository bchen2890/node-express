const fs = require('fs');

var file = {
    readFile: (req, res) => {
        console.time('readFile()')

        fs.readFile('assets/test.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(data)
            console.log(data);
        })
        console.timeEnd('readFile()')

    },
    promiseFile: () => {
        return new Promise((resolve, reject) => {
            fs.readFile('assets/hello.txt', 'utf8', (err, data) => {
                if (err) {
                    reject(err);  // calling `reject` will cause the promise to fail with or without the error passed as an argument
                    return;        // and we don't want to go any further
                }
                console.log(data);
                resolve(data);
            })
        });
    },
    writeFile: (req, res) => {
        const content = req.query.content;
        fs.writeFile('assets/test.txt', content, err => {
            if (err) {
                console.error(err);
                return;
            }
        });
        res.send("You wrote \"" + content + "\"");
    },
    appendFile: (req, res) => {
        const content = req.query.content;
        console.log("APPEND"+content)
        fs.appendFile('assets/test.txt', content, err => {
            if (err) {
                console.error(err);
                return;
            }
        });
        res.send("You append \"" + content + "\"");
    },
};

module.exports = file;