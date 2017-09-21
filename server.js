var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var bodyParser = require("body-parser");

var friendArray = [];

//Set up parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//Routing
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

//APIs
app.get("/api/friends", function(req, res) {
  return res.json(friendArray);
})

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  friendArray.push(newFriend);
  console.log(friendArray);
  res.json(newFriend);
})

//Set up Listening
app.listen(PORT, function(){
  console.log("listening on Port " + PORT);
});