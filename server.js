var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
 

 
var PORT = process.env.PORT || 8080;
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 

//require('./app/routing/api-routes.js')(app);
//require('./oapp/routing/html-routes.js')(app);//having issues getting page to require(have tried mand different paths)

app.listen(PORT, function(){

	console.log("App listening on port: " + PORT);
});

var answers;
 
 //for (i = 0; i < answers.length){

 	//if (answers <)
 //}
 //have not been able to get the home page to display on local host server so i have been trying anything and everything so i can finish app.