const { expect } = require('chai');
const pizzUni = require('./pizza');

describe('pizzUni', () => {
    describe('makeAnOrder', () => {
        it('empty order trow error', () => {
            expect(() => pizzUni.makeAnOrder({})).to.throw('You must order at least 1 Pizza to finish the order.')
        })
        it('pizza with drink', () => {
            expect(pizzUni.makeAnOrder({orderedPizza: 'pizza', orderedDrink: 'drink'})).to.be.equal('You just ordered pizza and drink.')
        })
        it('pizza without drink', () => {
            expect(pizzUni.makeAnOrder({orderedPizza: 'pizza'})).to.be.equal('You just ordered pizza')
        })
    })
    describe('getRemainingWork', () => {
        it('status ready', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'pizza', status: 'ready'}])).to.be.equal('All orders are complete!')
        })
        it('status preparing', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'pizza', status: 'remaining'}])).to.be.equal('The following pizzas are still preparing: pizza.')
        })
    })
    describe('orderType', () => {
        it('Carry Out', () => {
            expect(pizzUni.orderType(20, 'Carry Out')).to.be.equal(18)
        })
        it('Delivery', () => {
            expect(pizzUni.orderType(20, 'Delivery')).to.be.equal(20)
        })
    })
})
