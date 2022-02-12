/*
============================================
; Title: Exercise 6.3
; Author: Professor Krasso
; Date: 2/8/2012
; Modified By: Joel Hartung
; Code Attribution: Exercise 6.3 code taken from WEB 340 Blackboard course
;===========================================
*/

var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

var mongoDB = "mongodb+srv://admin:!8$uffU5aw7pnZ,@buwebdev-cluster-1.gzdv5.mongodb.net/fms?retryWrites=true&w=majority";

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error:"));

db.once("open", function () {
    console.log("Application connected to mLab MongoDB instance");
});
