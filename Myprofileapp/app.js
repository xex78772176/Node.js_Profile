var express = require("express");

var path = require("path");
//include the routes.js
var routes = require("./routes");


//create express app
var app = express();

//specific the port 
app.set("port", process.env.PORT || 3000);

//specific the views locateion and engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");

//if the route js not in the root directory
//app.use("/",require("./routes/web"));

app.use(routes);


//when server start
app.listen(app.get("port"), function(){
    console.log("Server start on port", + app.get("port"));



});