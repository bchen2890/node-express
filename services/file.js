const fs = require('fs');

var file = {
    readFile: (req, res) => {

        fs.readFile('assets/hello.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(data)
            console.log(data);
        })
    },
};

module.exports = file;