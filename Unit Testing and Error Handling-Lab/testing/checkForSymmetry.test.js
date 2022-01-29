const { expect } = require('chai');
const isSymmetric = require('./checkForSymmetry.js');

describe('Symmetry CheCker', () => {
    it('returns true for symmetric array', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true;
    });
    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1,2,1,2])).to.be.false;
    });
    it('returns false for non-array', () => {
        expect(isSymmetric('')).to.be.false;
    });
    it('returns false for different type symmetric array', () => {
        expect(isSymmetric([1,2,2,'1'])).to.be.false;
    });

})
