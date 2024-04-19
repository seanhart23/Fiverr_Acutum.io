var express    = require('express'),
    router     = express.Router(),
    nodemailer = require('nodemailer');
    
router.get('/', function(req, res){
    res.render('index');
    console.log("Someone visited...")
});

router.get('/supply', function(req, res){
    res.render('supplychain');
});

router.get('/analytics', function(req, res){
    res.render('analytics');
});

router.get('/lp', function(req, res){
    res.render('lp');
});

//---------- NODE Mailer Routes ----------//
router.post('/contact', function(req, res){

    var newEmail = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        newsletter: req.body.newsletter
    }

    var newsletter = ""

    if (newEmail.newsletter !="Yes"){
        newsletter = "No"
    } else {
        newsletter = "Yes"
    }

    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'info@uneelabs.com',
            pass: '8T5Huq4aTayZ5uL&'
        }
    })

    const mailOpts = {
        to: 'info@uneelabs.com',
        subject: "New Message from Acutum.io Website",
        html: 'You have just recieved a message from your website!</p><br><b>Name:</b> ' + newEmail.name + "<div><b>Email:</b> " + newEmail.email + "</div><div><b>Opt into Newsletter:</b> " + newsletter + "</div><div><b>Message:</b> " + newEmail.message
    }

    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {}
        else {}
    })
   
    res.redirect('/');
});

module.exports = router;