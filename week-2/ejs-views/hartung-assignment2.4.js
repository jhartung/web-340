/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 10 January 2022
; Modified By: Joel Hartung
; Code Attribution: Assignment 2.4 code taken from WEB 340 Blackboard course
;===========================================
*/

var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function (request, response) {
    response.render("index", {
        firstName: "Joel",
        lastName: "Hartung",
        address: "1000 Galvin Road South",
    });
});

//Creates te local server at port 8080
http.createServer(app).listen(8080, function () {
    console.log("EJS-Views app started on port 8080.");
});
