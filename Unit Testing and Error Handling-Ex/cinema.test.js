const { expect } = require('chai');
const cinema = require('./cinema');

describe('tests cinema', () => {
    describe('showMovies', () => {
        it('length of the input = 0', () => {
            expect(cinema.showMovies([])).to.be.equal("There are currently no movies to show.");
        });
        it('length of the input > 0', () => {
            expect(cinema.showMovies(['KingKong','Joker'])).to.be.equal('KingKong, Joker');
        });
    });
    describe('ticketPrice', () => {
        it('correct test', () => {
            expect(cinema.ticketPrice("Premiere")).to.be.equal(12.00);
        });
        it('correct test', () => {
            expect(cinema.ticketPrice("Normal")).to.be.equal(7.50);
        });
        it('correct test', () => {
            expect(cinema.ticketPrice("Discount")).to.be.equal(5.50);
        });
        it('incorrect projection type', () => {
            expect(() => cinema.ticketPrice('')).to.throw("Invalid projection type.");
        });
    })
    describe('swapSeatsInHall', () => {
        it('correct test', () => {
            expect(cinema.swapSeatsInHall(1,20)).to.be.equal("Successful change of seats in the hall.")
        });
        it('first num not exist', () => {
            expect(cinema.swapSeatsInHall(3)).to.be.equal("Unsuccessful change of seats in the hall.")
        });
        it('second num not exist', () => {
            expect(cinema.swapSeatsInHall(3, )).to.be.equal("Unsuccessful change of seats in the hall.")
        });
        it('seats are not a numbers', () => {
            expect(cinema.swapSeatsInHall('1', '2')).to.be.equal("Unsuccessful change of seats in the hall.")
        });
        it('first seat is less or equal of 0', () => {
            expect(cinema.swapSeatsInHall(-1, 10)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 10)).to.be.equal("Unsuccessful change of seats in the hall.")
        });
        it('second seat is less or equal of 0', () => {
            expect(cinema.swapSeatsInHall(10, 0)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(10, -1)).to.be.equal("Unsuccessful change of seats in the hall.")
        });
        it('first number greater than 20', () => {
            expect(cinema.swapSeatsInHall(21, 3)).to.be.equal("Unsuccessful change of seats in the hall.")
        });
        it('second number greater than 20', () => {
            expect(cinema.swapSeatsInHall(1, 33)).to.be.equal("Unsuccessful change of seats in the hall.")
        })
        
    })
})


