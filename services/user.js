const print = (message) => {
    console.log(message)
}

var user = {
    register: (req, res) => {
       var registerInfo = {
            name: req.body.name,
            username: 'user_' + req.body.name,
        };
        res.send(registerInfo);
    },
    welcome: (req, res) => {
        setTimeout(() => {
            // runs after 2 seconds
            console.log("Timeout")
        }, 2000)
        setTimeout(print, 2000, "Timeout with parameter")

        res.send("Welcome " + req.query.name);
    }
};

module.exports = user;