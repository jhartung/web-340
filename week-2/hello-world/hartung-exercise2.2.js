/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: 10 January 2022
; Modified By: Joel Hartung
; Code Attribution: Exercise 2.2 code taken from WEB 340 Blackboard course
;===========================================
*/

var express = require("express");
var http = require("http");
var app = express();
app.use(function(request, response) {
    console.log("In comes a request to:" + request.url);
    response.end("Hello World");
});

http.createServer(app).listen(8080);