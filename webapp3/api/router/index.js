var express = require('express');
var bp = require('body-parser');
var app = express();

//跨域加下面的代码
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
        res.send(200);
    } else {
        next();
    }
});

app.use(express.static(__dirname + '/'));

app.use(bp.urlencoded({extended: false}));

var front = require('./front')
var back = require('./back')



module.exports = {
    start: function(_port){
		
		
        front.register(app);
        back.register(app);

        app.listen(_port);
    }
}