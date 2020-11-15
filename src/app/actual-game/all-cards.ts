export class AllCards {
    cards = [{
        logoUrl: "../../assets/splendex.png",
        id: 0,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/splendex.png",
        id: 1,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/angular.png",
        id: 2,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/angular.png",
        id: 3,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/d3.png",
        id: 4,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/d3.png",
        id: 5,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/jenkins.png",
        id: 6,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/jenkins.png",
        id: 7,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/postcss.png",
        id: 8,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/postcss.png",
        id: 9,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/react.png",
        id: 10,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/react.png",
        id: 11,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/sass.png",
        id: 12,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/sass.png",
        id: 13,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/ts.png",
        id: 14,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/ts.png",
        id: 15,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/webpack.png",
        id: 16,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/webpack.png",
        id: 17,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/redux.png",
        id: 18,
        isRevealed: false,
        isPaired: false
    }, {
        logoUrl: "../../assets/redux.png",
        id: 19,
        isRevealed: false,
        isPaired: false
    },
    ]
    
    getCards() {
        return this.shuffleCards(this.cards);
    }
    shuffleCards(cards) {
        let currentIndex = cards.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
            cards[randomIndex].isRevealed = false;
        } for (let i = 0; i < this.cards.length; i++) {
            cards[i].id = i;
        }
        return cards;
    }
}