'use strict';

const properties = require('../package.json');
const userApi = require('../services/user');
const fileApi = require('../services/file');

var controllers = {
    about: (req, res) => {
        console.log("about");

        var aboutInfo = {
            name: properties.name,
            version: properties.version,
        };
        res.json(aboutInfo);
    },

    register: (req, res) => {
        console.log("register");
        userApi.register(req, res, (err, info) => {
            if (err)
                res.send(err);
            res.json(info);
        });
    },

    welcome: (req, res) => {
        console.log("welcome");
        userApi.welcome(req, res, (err, info) => {
            if (err)
                res.send(err);
            res.json(info);
        });
    },

    index: (req, res) => {
        res.render('index', {
            subject: 'Pug template engine',
            name: 'our template',
            link: 'https://google.com'
        });
    },

    readFile: (req, res) => {
        console.log("file");
        fileApi.readFile(req, res, (err, info) => {
            if (err)
                res.send(err);
            res.json(info);
        });
    },

    writeFile: (req, res) => {
        console.log("writeFile");
        fileApi.writeFile(req, res, (err, info) => {
            if (err)
                res.send(err);
            res.json(info);
        });
    },

    promiseFile: (req, res) => {
        console.log("promiseFile");
        fileApi.promiseFile()
            .then(data => {
                console.log(data)
                res.send(data)
                res.json(data);
            })
            .catch(err => res.send(err))
    },

    appendFile: (req, res) => {
        console.log("appendFile");
        fileApi.appendFile(req, res, (err, info) => {
            if (err)
                res.send(err);
            res.json(info);
        });
    },

    
};

module.exports = controllers;