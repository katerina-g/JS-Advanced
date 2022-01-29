const { expect } = require('chai');
const companyAdministration  = require('./companyAdministration');


describe('test repository', () => {
    describe('func' , () => {
        it('test hiringEmployee', () => {
            expect(companyAdministration.hiringEmployee('Ivan','Programmer', 3)).to.be.equal(`Ivan was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('Ivan','Programmer', 5)).to.be.equal(`Ivan was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('Ivan','Programmer', 2)).to.be.equal(`Ivan is not approved for this position.`);
            expect(() => companyAdministration.hiringEmployee('Ivan', 'Teacher', 5)).to.throw('We are not looking for workers for this position.');

        })
        it('test calculateSalary', () => {
            expect(companyAdministration.calculateSalary(1)).to.be.equal(15);
            expect(companyAdministration.calculateSalary(160)).to.be.equal(2400);
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415);
            expect(() => companyAdministration.calculateSalary(-160)).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary("-160")).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary([-160])).to.throw('Invalid hours');

        })
        it('test firedEmployee', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.be.eql('Ivan, George');
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.be.eql('Petar, George');
            expect(() => companyAdministration.firedEmployee('Petar', 0)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], '1')).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1.1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 4)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee('Petar', 1.2)).to.throw("Invalid input");
        })
    })
})