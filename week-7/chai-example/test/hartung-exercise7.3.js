/*
============================================
; Title: Exercise 7.3
; Author: Professor Krasso
; Date: 2/14/2022
; Modified By: Joel Hartung
; Code Attribution: Exercise 7.3 code taken from WEB 340 Blackboard course
;===========================================
*/

var fruits = require("../hartung-fruits");
var chai = require("chai");
var assert = chai.assert;
describe("fruits", function() {
    it("should return an array of fruits", function () {
        var f = fruits("Apple, Orange, Mango");
        assert(Array.isArray(f));
    });
});