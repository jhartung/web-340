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
var helmet = require("helmet");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

// set up csrf protection
var csrfProtection = csrf({cookie: true});

// database information
var mongoose = require("mongoose");
var mongoDB = "mongodb+srv://admin:!8$uffU5aw7pnZ,@buwebdev-cluster-1.gzdv5.mongodb.net/fms?retryWrites=true&w=majority";

// initialize express
var app = express();

// imports the Employee model
var Employee = require('./models/employee');

// sets the views and view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);

// use statements
app.use(logger("short"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next) {
    var token = req.csrfToken();
    res.cookie("XSRF-TOKEN", token);
    res.locals.csrfToken = token;
    next();
})
app.use(helmet.xssFilter());
app.use('/static', express.static(path.join(__dirname, 'public')))

// routing
app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page",
        message: "XSS Prevention Example"
    });
});

app.post("/process", function(req, res) {
   // console.log(req.body.txtFirstName);
    if (!req.body.txtFirstName) {
        res.status(400).send("Entries must have a first name");
        return;
    }
    if (!req.body.txtLastName) {
        res.status(400).send("Entries must have a last name");
        return;
    }
    // get the request's form data

    var employeeFirstName = req.body.txtFirstName;
    console.log(employeeFirstName);

    var employeeLastName = req.body.txtLastName;
    console.log(employeeLastName);

    // create an employee model
    var employee = new Employee({
        firstName: employeeFirstName,
        lastName: employeeLastName
    });

    //save
    employee.save(function (error) {
        if (error) throw error;
        console.log(employeeFirstName + employeeLastName + " saved successfully!");
    });
    res.redirect("/");
})

app.get("/list", function (req, res) {
    Employee.find({}, function(error, employees) {
        if (error) throw error;
    
    res.render("list", {
        title: "Employee list",
        employees: employees
        });
    });
});

app.get("/new", function (req, res) {
    res.render("new", {
        title: "Data entry page",
    });
});

/* 
app.get("/view", function (req, res) {
    res.render("view", {
        title: "View selected employee details",
    });
});
*/

app.get("/view/:queryName", function (req, res) {
    var queryName = req.params['queryName'];
    Employee.find({'firstName': queryName}, function(error, employees) {
        if (error) {
            console.log(error);
            throw error;
        } else {
        console.log(employees);
            if (employees.length > 0) {
                res.render("view", {
                    title: "Employee Record", 
                    employee: employees
                })
            }
            else {
                res.redirect("/list")
            }
        }
    })
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

/*
http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080!");
});
*/

http:http.createServer(app).listen(app.get("port"), function() {console.log("Application started on port " + app.get("port"))});