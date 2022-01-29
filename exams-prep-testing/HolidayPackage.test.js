const {expect} = require('chai')
const {HolidayPackage} = require('./HolidayPackage')

describe('test HolidayPackage', () => {
    describe('test functionality', () => {
        it('test constructor', () => {
            let hP = new HolidayPackage('Italy', 'Summer')
            expect(hP.destination).to.be.equal('Italy');
            expect(hP.season).to.be.equal("Summer")
            expect(hP.vacationers).to.be.eql([])
            expect(hP.insuranceIncluded).to.be.equal(false)
        })
        it('test showVacationers', () => {
            let hP = new HolidayPackage('Italy', 'Summer')
            expect(hP.showVacationers()).to.be.equal("No vacationers are added yet")
            hP.addVacationer('Ivan Ivanov')
            expect(hP.showVacationers()).to.be.equal('Vacationers:\nIvan Ivanov')
        })
        it('test addVacationer()' ,() => {
            expect(() => new HolidayPackage().addVacationer(2)).to.throw("Vacationer name must be a non-empty string")
            expect(() => new HolidayPackage().addVacationer(' ')).to.throw("Vacationer name must be a non-empty string")
            expect(() => new HolidayPackage().addVacationer('Iven')).to.throw("Name must consist of first name and last name")

        })
        it('test insuranceIncluded', () => {
            expect(() => new HolidayPackage().insuranceIncluded=undefined).to.throw('Insurance status must be a boolean')
            expect(new HolidayPackage().insuranceIncluded=true).to.be.equal(true)
        })
        it('test generateHolidayPackage', () => {
            let hP = new HolidayPackage('Italy', 'Summer')
            expect(() =>hP.generateHolidayPackage()).to.throw('There must be at least 1 vacationer added')
            hP.addVacationer('Ivan Ivanov')
            hP.addVacationer('Iva Ivanova')
            expect(hP.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nIva Ivanova\nPrice: 1000')
            hP.insuranceIncluded=true
            expect(hP.generateHolidayPackage()).to.be.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nIva Ivanova\nPrice: 1100')
        })
    })
})