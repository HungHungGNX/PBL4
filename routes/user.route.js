var express = require('express');

var controller = require('../controllers/user.controller');
//var validate = require('../validate/user.validate');
var authMiddleware = require('../middlewares/auth.middleware');

var router = express.Router();

router.get('/', controller.index);


router.get('/run', controller.run);

router.get('/cookie', function(req, res, next) {
    res.cookie('user-id', 12345);
    res.send('Hello');
});


module.exports = router;