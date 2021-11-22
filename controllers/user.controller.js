var db = require('../data').userDB;
var shortid = require('shortid');

module.exports.index = function(req, res) {
    res.render('users/index');
};

module.exports.run = function(req, res) {
    res.render('users/run');
};