const { expect} = require('chai')
const dealership = require('./dealership')

describe('test dealership', () => {
    describe('newCarCost', () => {
        it('checking without returning ', () => {
            expect(dealership.newCarCost('a1', 1000)).to.equal(1000)
        })
        it('check when returning old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.be.equal(15000)
        })
    })
    describe('carEquipment', () => {
        it('test equipment', () => {
            expect(dealership.carEquipment(['1', '2', '3'], [0,1])).to.be.eql(['1', '2'])
        })
    })
    describe('euroCategory', () => {
        it('check category 4', () => {
            expect(dealership.euroCategory(4)).to.be.equal(`We have added 5% discount to the final price: 14250.`)
        })
        it('check category 5', () => {
            expect(dealership.euroCategory(5)).to.be.equal(`We have added 5% discount to the final price: 14250.`)
        })
        it('check category 3', () => {
            expect(dealership.euroCategory(3)).to.be.equal('Your euro category is low, so there is no discount from the final price!')
        })
    })
})