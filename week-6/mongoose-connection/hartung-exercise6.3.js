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
