const { expect } = require('chai');
const createCalculator = require('./addSubtract');

describe('Calculator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });
    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });
    it('adds single number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });
    it('adds multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.be.equal(3);
    });
    // ToDo other tests!!!
})