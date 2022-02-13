/*
============================================
; Title: app.js
; Author: Professor Krasso
; Date: 12 February 2022
; Modified By: Joel Hartung
; Description: app.js
; Code Attribution: Additional code from WEB 340 Assignment documentation & WEB 340 Course Repository
;===========================================
*/

// adding all requirements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page",
    });
});

app.get("/list", function (req, res) {
    res.render("list", {
        title: "Tabular view of employee records",
    });
});

app.get("/new", function (req, res) {
    res.render("new", {
        title: "Data entry page",
    });
});

app.get("/view", function (req, res) {
    res.render("view", {
        title: "View selected employee details",
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080!");
});
