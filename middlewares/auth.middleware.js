var db = require('../data').userDB;
var modelCatalogs = require('../model/catalogs');

module.exports.requireAuth = function(req, res, next) {


    var idea = modelCatalogs.listUserName(function(items) {
        if (!req.signedCookies.userId) {
            res.redirect('../auth/login');
            return;
        }
        let foundUser = items.find((data) => req.signedCookies.userId === data.Id);

        if (!foundUser) {
            res.redirect('../auth/login');
            return;
        }

        //res.locals.foundUser = foundUser;

        next();
    })

};