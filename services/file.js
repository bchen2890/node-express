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
};

module.exports = file;