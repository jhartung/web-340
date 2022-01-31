var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
const { response } = require("express");
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function (req, res) {
    res.render("index", {
        message: "One two one two this is just a test",
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080!");
});
