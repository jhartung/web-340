/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 4 January 2022
; Modified By: Joel Hartung
; Code Attribution: Exercise 1.3 code taken from WEB 340 - Week 1 Blackboard course
;===========================================
*/

var url = require('url');

var parsedURL = url.parse('https://www.example.com/profile?name=smith')

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);