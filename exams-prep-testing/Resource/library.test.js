const {expect} = require('chai')
const {library} = require('./library')

//
// describe('test library', () => {
//     describe("test func", () => {
//         it('test calkPriceOfBook', () => {
//             expect(library.calcPriceOfBook("Who", 2000)).to.be.equal(`Price of Who is 20.00`)
//             expect(library.calcPriceOfBook("Who", 1980)).to.be.equal(`Price of Who is 10.00`)
//             expect(library.calcPriceOfBook("Who", 1979)).to.be.equal(`Price of Who is 10.00`)
//             expect(() => library.calcPriceOfBook(20, 1980)).to.throw("Invalid input")
//             expect(() => library.calcPriceOfBook("Who", "some")).to.throw("Invalid input")
//         })
//         it('test findBook', () => {
//             expect(() => library.findBook([], "Troy")).to.throw("No books currently available")
//             expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.be.equal("We found the book you want.")
//             expect(library.findBook(["Troy", "Life Style", "Torronto"], "She")).to.be.equal("The book you are looking for is not here!")
//         })
//         it('test arrangeTheBooks', () => {
//             expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input")
//             expect(() => library.arrangeTheBooks("some")).to.throw("Invalid input")
//             expect(() => library.arrangeTheBooks(3.14)).to.throw("Invalid input")
//             expect(library.arrangeTheBooks(20)).to.be.equal("Great job, the books are arranged.")
//             expect(library.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.")
//             expect(library.arrangeTheBooks(41)).to.be.equal("Insufficient space, more shelves need to be purchased.")
//         })
//
//     })
//
// })

describe('test library' ,() => {
    describe('test functionality', () => {
        it('test calcPriceOfBook', () => {
            expect(library.calcPriceOfBook('test', 1981)).to.be.equal(`Price of test is 20.00`);
            expect(library.calcPriceOfBook('test', 1980)).to.be.equal(`Price of test is 10.00`);
            expect(library.calcPriceOfBook('test', 1979)).to.be.equal(`Price of test is 10.00`);
            expect(() => library.calcPriceOfBook(20, 1980)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook("20", "1980")).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook('20', 1980.1)).to.throw("Invalid input");
        })
        it('test findBook', () => {
            expect(library.findBook(['new', 'test'], 'test')).to.be.eql('We found the book you want.');
            expect(library.findBook(['new', 'test'], 'some')).to.be.eql('The book you are looking for is not here!');
            expect(() => library.findBook([]), 'test').to.throw('No books currently available');
        })
        it('test arrangeTheBook', () => {
            expect(library.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(39)).to.be.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(41)).to.be.equal("Insufficient space, more shelves need to be purchased.");
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(1.2)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks("1.2")).to.throw('Invalid input');
        })
    })
})