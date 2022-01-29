const { expect } = require('chai');
const testNumbers = require('./testNumbers');

describe('testing testNumbers', () => {
    describe(' test sumNumber', () => {
        it('check params are nums', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.be.equal('3.00')
            expect(testNumbers.sumNumbers(-2, 3)).to.be.equal('1.00')
            expect(testNumbers.sumNumbers(3, -2)).to.be.equal('1.00')
            expect(testNumbers.sumNumbers(1.1111, 2.111111)).to.be.equal('3.22')

        })
        it('returns undefined', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.be.equal(undefined)
            expect(testNumbers.sumNumbers(null, 2)).to.be.equal(undefined)
        })

    })
    describe('test numberChecker', () => {
        it('trow error', () => {
            expect(() => testNumbers.numberChecker('NaN')).to.throw("The input is not a number!")
        })
        it('even number', () => {
            expect(testNumbers.numberChecker(2)).to.be.equal("The number is even!")
        })
        it('odd number', () => {
            expect(testNumbers.numberChecker(3)).to.be.equal("The number is odd!")
        })

    })
    describe('test averageSumArray', () => {
        it('testNumbers array to sum', () => {
            expect(testNumbers.averageSumArray([1,2,3,4])).to.be.equal(2.5)
        })
    })
})