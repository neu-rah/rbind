'use strict';

var should = require('should');

var rbinder;//module

describe('rbinder', function() {
  describe('module load', function() {
    it('should return the rbinder function', function() {
      rbinder=require("rbinder");
      rbinder.should.be.type('function');
		});
	});
  describe('bind function', function() {
    it('should return a right side bound function', function() {
      var args=rbinder(function(){return arguments;}).rbind(1)(2);
      args.should.have.property('0',2);
      args.should.have.property('1',1);
		});
	});
});
