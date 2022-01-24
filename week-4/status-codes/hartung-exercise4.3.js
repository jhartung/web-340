/*
============================================
; Title: Exercise 4.3
; Author: Professor Krasso
; Date: 24 January 2022
; Modified By: Joel Hartung
; Code Attribution: Exercise 4.3 code taken from WEB 340 Blackboard course
;===========================================
*/

const { response } = require("express");
var express = require("express");
var http = require("http");
var app = express();

app.get("/not-found", function (req, res) {
    res.status(404);
    res.json({
        error: "Page is missing, bro.",
    });
});

app.get("/ok", function (req, res) {
    res.status(200);
    res.json({
        message: "Dude, you're all set.",
    });
});

app.get("/not-implemented", function (req, res) {
    res.status(501);
    res.json({
        error: "Uh, I don't think we made this, man.",
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080!");
});
