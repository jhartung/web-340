/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 4 January 2022
; Modified By: Joel Hartung
; Code Attribution: Exercise 1.5 code taken from WEB 340 - Week 1 Blackboard course
;===========================================
*/

var http = require("http");

function processRequest(req, res) {
    var body = "This is only a test";
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);