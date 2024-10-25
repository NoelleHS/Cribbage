/**
 * Author : Noelle Healey-Stewart
 * Purpose: handle the operations on the deck of cards generated from CardClass.js
 */

let cardDeck = initlializeDeck(); // grab the initialized deck from CardClass

function shuffleDeck(){

    for (var i = cardDeck.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cardDeck[i];
        cardDeck[i] = cardDeck[j];
        cardDeck[j] = temp;
    }

}

function dealCard(player){

}

/**
 * method takes in a number to split the deck in half at that point and return the 
 * card a the top of the split deck
 * @param {*} num , the number to split the deck
 * @pre num > 4 < cardDeck.length - 4
 */
function splitTheDeck(num){
    card = cardDeck[num]
    cardDeck.splice(num,1)
}
shuffleDeck();
console.log(cardDeck)
