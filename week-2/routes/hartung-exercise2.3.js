/*
============================================
; Title: Exercise 2.3
; Author: Professor Krasso
; Date: 10 January 2022
; Modified By: Joel Hartung
; Code Attribution: Exercise 2.3 code taken from WEB 340 Blackboard course
;===========================================
*/

var express = require("express");
var http = require("http");
var app = express();

app.get("/", function(request, response) {
    response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
    response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
    response.end("Welcome to the contact page!");
});

app.use(function(request, response) {
    response.statusCode = 404;
    response.end("404!");
});

http.createServer(app).listen(8080);