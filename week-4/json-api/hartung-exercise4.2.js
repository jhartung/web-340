/*
============================================
; Title: Exercise 4.2
; Author: Professor Krasso
; Date: 24 January 2022
; Modified By: Joel Hartung
; Code Attribution: Exercise 4.2 code taken from WEB 340 Blackboard course
;===========================================
*/

var express = require("express");
var http = require("http");
var app = express();
app.get("/customer/:id", function (request, response) {
    var id = parseInt(request.params.id, 10);
    response.json({
        firstName: "King",
        lastName: "Stephen",
        employeeId: id,
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");
});
