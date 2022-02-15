/*
============================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 2/14/2022
; Modified By: Joel Hartung
; Code Attribution: Exercise 7.2 code taken from WEB 340 Blackboard course
;===========================================
*/

const assert = require("assert");

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});

function getFruits(str) {
    return str.split(',');
}

module.exports = getFruits;