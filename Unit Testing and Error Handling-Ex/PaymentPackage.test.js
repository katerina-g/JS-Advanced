const { expect } = require('chai');
const PaymentPackage = require('./PaymentPackage.js');

describe('test PaymentPackageClass', () => {
    describe('tests for name', () => {
        it('not a string name', () => {
            expect(() => new PaymentPackage(10, 100)).to.Throw("Name must be a non-empty string");
        });

        it('emty string name', () => {
            expect(() => new PaymentPackage('', 100)).to.Throw("Name must be a non-empty string");
        });

        it('test correct name', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(newPayment.name).to.equal('test');
        });

        it('test manual name', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(newPayment.name = 'newName').to.equal('newName');
        });
    })
    describe('tests for value', () => {
        it('not a number value', () => {
            expect(() => new PaymentPackage('name', '0')).to.Throw('Value must be a non-negative number');
        });
        it('negative value', () => {
            expect(() => new PaymentPackage('name', -1)).to.Throw('Value must be a non-negative number');
        });
        it('test correct value', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(newPayment.value).to.equal(1);
        });
        it('test set new value', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(newPayment.value = 2).to.be.equal(2);
        });
    })
    describe('tests for VAT', () => {
        it('not a number Vat', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(() => newPayment.VAT = 'str').to.Throw('VAT must be a non-negative number');
        });
        it('negative VAT', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(() => newPayment.VAT = -1).to.Throw('VAT must be a non-negative number');
        });
        it('test correct VAT', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(newPayment.VAT).to.equal(20);
        });
        it('test set new VAT', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(newPayment.VAT = 2).to.be.equal(2);
        });
    })
    describe('tests for active', () => {
        it('active status true', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(newPayment.active).to.be.true;
        });
        it('active status to be false', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(newPayment.active = false).to.be.false;
        });
        it('active status not a boolean', () => {
            let newPayment = new PaymentPackage('test', 1);
            expect(() => newPayment.active = '').to.throw('Active status must be a boolean');
        });
    })
    describe('test toString method', () => {
        it("toString method 1", () => {
            let newPayment = new PaymentPackage("Consultation", 800);
            expect(newPayment.toString()).to.be.equal("Package: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960");
        });

        it("toString method Active False", () => {
            let newPayment = new PaymentPackage("Consultation", 800);
            newPayment.active = false;
            expect(newPayment.toString()).to.be.equal("Package: Consultation (inactive)\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960");
        });

        it("toString method Vat = 0 ", () => {
            let newPayment = new PaymentPackage("Consultation", 800);
            newPayment.VAT = 0;
            expect(newPayment.toString()).to.be.equal("Package: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 0%): 800");
        });

        it("toString method 1", () => {
            let newPayment = new PaymentPackage("Consultation", 0);
            newPayment.VAT = 0;
            expect(newPayment.toString()).to.be.equal("Package: Consultation\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0");
        });    
    })

})