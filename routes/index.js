var express    = require('express'),
    router     = express.Router(),
    nodemailer = require('nodemailer');
    
router.get('/', function(req, res){
    res.render('index');
});

router.get('/supply', function(req, res){
    res.render('supplychain');
});

router.get('/analytics', function(req, res){
    res.render('analytics');
});

module.exports = router;