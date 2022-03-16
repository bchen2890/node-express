'use strict';

const controller = require('../controllers/controller');

module.exports = (app) => {
    app.route('/about').get(controller.about);
    app.post('/register', controller.register);
    app.route('/welcome').get(controller.welcome);
    app.get('/index', controller.index);
    app.get('/readFile', controller.readFile);
    app.get('/promiseFile', controller.promiseFile);
    app.get('/writeFile', controller.writeFile);
    app.get('/appendFile', controller.appendFile);

};