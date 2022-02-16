/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   15 February 2022
; Modified by: Joel Hartung
; Description: File for the employee database model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let employeeSchema = new Schema({
  name: {
    first: {type: String, required: true },
    last: {type: String, required: true }
  }
});

let Employee = mongoose.model("Employee", employeeSchema)

// Export the model so its publicly available.
module.exports = Employee;