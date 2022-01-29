let { expect } = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('odd or even', () => {
    it('returns undefined ', () => {
        expect(isOddOrEven(undefined)).to.be.equal(undefined);
    });
    it('retuns even', ()=> {
        expect(isOddOrEven('even')).to.be.equal('even');
    });
    it('retuns odd', () => {
        expect(isOddOrEven('odd')).to.be.equal('odd');
    });
})