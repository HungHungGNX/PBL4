var db = require('../data').userDB;

module.exports.requireAuth = function(req, res, next) {

    if (!req.signedCookies.userId) {
        res.redirect('../auth/login');
        return;
    }
    let foundUser = db.find((data) => req.signedCookies.userId === data.id);

    if (!foundUser) {
        res.redirect('../auth/login');
        return;
    }

    res.locals.foundUser = foundUser;

    next();
};