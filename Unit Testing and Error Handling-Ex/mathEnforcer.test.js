const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('return undefined with not a number parameter', () => {
            expect(mathEnforcer.addFive('str')).to.be.equal(undefined);
        });
        it('return correct result', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-1)).to.be.equal(4);
            expect(mathEnforcer.addFive(6.1)).to.be.closeTo(11.1, 0.01);
        });

    });
    describe('subtractTen', () => {
        it('return undefined with not a number parameter', () => {
            expect(mathEnforcer.subtractTen('str')).to.be.equal(undefined);
        });
        it('return correct result', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.09, 0.01);
        });
    });
    describe('sum function', () => {
        it('returns undefined if any of params is not a number', () => {
            expect(mathEnforcer.sum('str', 0)).to.be.equal(undefined);
            expect(mathEnforcer.sum(0, '0')).to.be.equal(undefined);
            expect(mathEnforcer.sum('str', '0')).to.be.equal(undefined);
        });
        it('returns correct result', () => {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
            expect(mathEnforcer.sum(5, -5)).to.be.equal(0);
            expect(mathEnforcer.sum(0, 1.1)).to.be.closeTo(1.1, 0.01);
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
            expect(mathEnforcer.sum(-5, 5)).to.be.equal(0);
            expect(mathEnforcer.sum(1.1, 0)).to.be.closeTo(1.1, 0.01);
        });
    });
});