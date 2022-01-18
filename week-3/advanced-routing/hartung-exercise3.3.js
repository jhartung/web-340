/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 18 January 2022
; Modified By: Joel Hartung
; Code Attribution: Exercise 3.3 code taken from WEB 340 Blackboard course
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/:employeeId", function (request, response) {
    var employeeId = parseInt(request.params.employeeId, 10);
    response.render("index", {
        employeeId: employeeId,
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");
});
