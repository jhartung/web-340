/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 18 January 2022
; Modified By: Joel Hartung
; Code Attribution: Exercise 3.2 code taken from WEB 340 Blackboard course
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tells Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tells Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function (request, response) {
    response.render("index", {
        message: "This is a test of the Morgan Logger. Do not be alarmed. This is only a test.",
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");
});
