var express = require('express');

var controller = require('../controllers/user.controller');
//var validate = require('../validate/user.validate');
var authMiddleware = require('../middlewares/auth.middleware');

var router = express.Router();

router.get('/', controller.index);


router.get('/run', controller.run);

router.get('/logout', function(req, res) {
    res.cookie('userId', null, {
        signed: true
    });
    res.redirect('../auth/login');
})

module.exports = router;