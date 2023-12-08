var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    app            = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//********** CREAT ROUTES *********//
var indexRoutes = require('./routes/index');

//********** REQUIRING ROUTE FILES *********//
app.use('/', indexRoutes);

//********** TELL APP WHICH PORT & IP TO USE *********//
app.listen(process.env.PORT || 3002, process.env.IP, function(){
    console.log("================================");
    console.log("The server has started on port 3002!");
    console.log("================================");
});