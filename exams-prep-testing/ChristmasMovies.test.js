const { expect } = require('chai');
const {ChristmasMovies}= require('./Christmas Movies');


describe('Test ChristmasMovies', () => {
    describe('functionality', () => {
        it('test constructor', () => {
            let cm = new ChristmasMovies();
            expect(cm.movieCollection).to.be.eql([]);
            expect(cm.watched).to.be.eql({});
            expect(cm.actors).to.be.eql([]);
        })
        it('test buyMovie()', () => {
            let first = new ChristmasMovies();
            let second = new ChristmasMovies();
            second.buyMovie('new', ['a','b'])
            expect(first.buyMovie()).to.be.equal("You just got undefined to your collection in which  are taking part!")
            expect(first.buyMovie('test', ['one', 'two'])).to.be.equal('You just got test to your collection in which one, two are taking part!')
            expect(() => second.buyMovie('new', ['a','b'])).to.throw('You already own new in your collection!')
        })
        it('test discardMovie()', () => {
            let first = new ChristmasMovies();
            let second = new ChristmasMovies();
            first.buyMovie('new', ['a','b']);
            first.watchMovie('new')
            expect(() => first.discardMovie('test')).to.throw('test is not at your collection!')
            expect(first.discardMovie('new')).to.be.equal('You just threw away new!')
            expect(() => first.watchMovie('test')).to.throw('No such movie in your collection!')
            second.buyMovie('one', ['bob','tom'])
            second.buyMovie('It', ['sam', 'jul'])
            second.watchMovie('one');
            expect(() => second.discardMovie('It')).to.throw('It is not watched!')

        })
        it('test watchMovie()', () => {
            let first = new ChristmasMovies();
            first.buyMovie('test', ['a','b']);
            expect(() => first.watchMovie('new')).to.throw('No such movie in your collection!')
            first.watchMovie('test');
            expect(first.watched['test']).to.be.equal(1)
            first.watchMovie('test')
            expect(first.watched['test']).to.be.equal(2)

        })
        it('test favouriteMovie()', () => {
            let first = new ChristmasMovies();
            expect(() => first.favouriteMovie()).to.throw('You have not watched a movie yet this year!')
            first.buyMovie('new', ['1','2']);
            first.buyMovie('test', ['3','4']);
            first.watchMovie('test');
            first.watchMovie('new');
            first.watchMovie('test');
            expect(first.favouriteMovie()).to.be.equal('Your favourite movie is test and you have watched it 2 times!')
        })
        it('test mostStarredActors', () => {
            let first = new ChristmasMovies();
            expect(() => first.mostStarredActor()).to.throw('You have not watched a movie yet this year!')
            first.buyMovie('new', ['a', 'b'])
            first.buyMovie('test', ['c', 'a'])
            expect(first.mostStarredActor()).to.be.equal('The most starred actor is a and starred in 2 movies!')

        })

    })

})