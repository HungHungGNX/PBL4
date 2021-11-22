//var md5 = require('md5');
var shortid = require('shortid');
var db = require('../data').userDB;
var modelCatalogs = require('../model/catalogs');

module.exports.login = function(req, res) {
    res.render('auth/login');
};

module.exports.postLogin = async(req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    //var user = db.get('users').find({ email: email }).value();
    let foundUser = db.find((data) => req.body.email === data.email);

    if (!foundUser) {
        res.render('./auth/login');
        return;
    }

    let storedPass = foundUser.password;

    const passwordMatch = foundUser.password === req.body.password;
    if (!passwordMatch) {
        res.render('./auth/login');
        return;
    }


    // res.cookie('userId', user.id, {
    //     signed: true
    // });
    res.cookie('userId', foundUser.id, {
        signed: true
    });

    res.redirect('../users');
};

module.exports.postRegister = async(req, res) => {
    try {
        let foundUser = db.find((data) => req.body.email === data.email);
        if (!foundUser) {

            let newUser = {
                id: shortid.generate(),
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            };
            db.push(newUser);
            res.render('./auth/login')

        } else {
            return;
        }
    } catch {
        res.send("Internal server error");
    }
};


async function sendGames() {
    var games = await modelCatalogs.listUserName();
    console.log(games);
}

sendGames();