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

// database information
var mongoose = require("mongoose");
var mongoDB = "mongodb+srv://admin:!8$uffU5aw7pnZ,@buwebdev-cluster-1.gzdv5.mongodb.net/fms?retryWrites=true&w=majority";
var app = express();

// imports the Employee model
var Employee = require('./models/employee');

// sets the views and view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use('/static', express.static(path.join(__dirname, 'public')))

// renders the appropriate pages when requested
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

//Mongoose connection information
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error:"));
db.once("open", function () {
    console.log("Application connected to MongoDB instance");
});


// Creates server on port 8080
http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080!");
});
