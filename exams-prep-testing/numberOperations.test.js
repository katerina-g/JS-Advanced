const { expect } = require('chai');
const numberOperations = require('./03. Number Operations_Resources');

describe('Tests numberOperation', () => {
    describe('test powNumber', () => {
        it('return power of given number', () => {
            expect(numberOperations.powNumber(2)).to.be.equal(4)
        })
    })
    describe('test numberChecker', () => {
        it('throw error if input is not a number', () => {
            expect(() => numberOperations.numberChecker('str')).to.throw('The input is not a number!')
            expect(() => numberOperations.numberChecker(NaN)).to.throw('The input is not a number!')
        })
        it('number < 100', () => {
            expect(numberOperations.numberChecker(99)).to.be.equal('The number is lower than 100!')
        })
        it('number >= 100', () => {
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!')
            expect(numberOperations.numberChecker(101)).to.be.equal('The number is greater or equal to 100!')
        })
    })
    describe('test sumArrays', () => {
        it('test arrays with equal length', () => {
            expect(numberOperations.sumArrays([1,2,3], [1,2,3])).to.eql([2, 4, 6])
        })
        it('test first array length > second' , () => {
            expect(numberOperations.sumArrays([1,2,3], [1,2])).to.eql([2, 4, 3])
        })
        it('test second array length > first' , () => {
            expect(numberOperations.sumArrays([1, 2], [1, 2, 3])).to.eql([2, 4, 3])
        })
    })
})

