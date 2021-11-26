//var md5 = require('md5');
var shortid = require('shortid');
var db = require('../data').userDB;
var modelCatalogs = require('../model/catalogs');
var bcrypt = require('bcrypt');

module.exports.login = function(req, res) {
    res.render('auth/login');
};

module.exports.postLogin = (req, res) => {

    var idea = modelCatalogs.listUserName(function(item) {
        let foundUser = item.find((data) => req.body.email === data.Email);
        console.log(foundUser);
        if (!foundUser) {
            res.render('./auth/login');
            return;
        }
        const passwordMatch = bcrypt.compareSync(req.body.password, foundUser.Password);

        if (!passwordMatch) {
            res.render('./auth/login');
            return;
        }


        res.cookie('userId', foundUser.Id, {
            signed: true
        });

        res.redirect('../users');
    })

};

module.exports.postRegister = async(req, res) => {



    var check = modelCatalogs.listUserName(function(items) {

        let foundUser = items.find((data) => req.body.email === data.Email);
        if (!foundUser) {
            values = [
                [shortid.generate(), req.body.username, req.body.email, bcrypt.hashSync(req.body.password, 10)]
            ]
            var idea = modelCatalogs.create(values, function(result) {
                console.log("Number of records inserted: " + result);
            })
            res.render('./auth/login')
        }
    })
};