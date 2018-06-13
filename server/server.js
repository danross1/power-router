var express = require('express');
var app = express();
const bodyParser=require('body-parser');

var power = require('./routes/power');

var port = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/power', power);

app.listen(port, function(){
    console.log('listening on port', port);  
});