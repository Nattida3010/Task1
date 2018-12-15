var express = require('express');
var app = express();
var db = require('./database.js') //connect database
var cors = require('cors')
app.use(cors())




var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));

//Add  rounting 
app.get('/', function (req, res) {
    res.send('Express is running');
});
var output = {
    status: 'success',
    message: 'REST API is working'
}
app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

app.get('/api/categories', db.getAllCategories )

// index page
app.get('/', function (req, res) {
    res.send('Express is running');
    });
    app.get('/api/json', function (req, res) {
       var test={emp:"emp",active:"activate",time:"5"}
    res.json(test);
        });
    
    var port = process.env.PORT || 8080;
    app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
    });