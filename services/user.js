
var user = {
    register: (req, res) => {
       var registerInfo = {
            name: req.body.name,
            username: 'user_' + req.body.name,
        };
        res.send(registerInfo);
    },
    welcome: (req, res) => {
        res.send("Welcome " + req.query.name);
    }
};

module.exports = user;