class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity ) {
        articleModel = articleModel.toLowerCase()
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!")
        }
        if (this.listOfArticles.find(a => a.articleName == articleName && a.articleModel == articleModel)) {
            let art = this.listOfArticles.find(a => a.articleName == articleName)
            art.quantity += quantity
        } else {
            this.listOfArticles.push({articleModel, articleName, quantity})
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`


    }
    inviteGuest (guestName, personality) {
        let g = this.guests.find((g) => g.guestName == guestName);
        if (g) {
            throw new Error(`${guestName} has already been invited.`)
        }
        let points = 50;
        if (personality == "Vip") {
            points = 500;
        } else if (personality == "Middle") {
            points = 250;
        }
        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`
    }
    buyArticle (articleModel, articleName, guestName) {
        if(!this.listOfArticles.find((a) => a.articleName == articleName && a.articleModel == articleModel)) {
            throw new Error("This article is not found.")
        }
        let art = this.listOfArticles.find((a) => a.articleName == articleName && a.articleModel == articleModel)
        if (art.quantity == 0) {
            return `The ${articleName} is not available.`
        }
        if (!this.guests.find((g) => g.guestName == guestName)) {
            return "This guest is not invited."
        }
        let g = this.guests.find((g) => g.guestName == guestName);
        if (g.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article."
        } else {
            g.points -= this.possibleArticles[articleModel];
            g.purchaseArticle += 1;
            art.quantity -= 1;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }

    }
    showGalleryInfo (criteria) {
        if (criteria == "article") {
            let result = ["Articles information:"];
            this.listOfArticles.forEach((a) => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`))
            return result.join('\n')
        } else if (criteria == "guest") {
            let result = ["Guests information:"];
            this.guests.forEach((g) => result.push(`${g.guestName} - ${g.purchaseArticle}`))
            return result.join('\n')
        }

    }


}
//array.find(e => e.includes("#"))

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));





