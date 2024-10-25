/**
 * Author: Noelle Healey-Stewart
 * Purpose: object representation for the 52 cards of the game 
 */

var deck = [];// initializing the 52 card deck to null
var suits = ["heart", "spade", "diamond", "clover"]
var values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"]

// const mongoose = require('mongoose');

// const CardSchema = new mongoose.Schema({
//   suit: { type: String, required: true },
//   value: { type: String, required: true},
//   color: { type: String, required: true },
// });

// const Card = mongoose.model('Card', CardSchema);

// module.exports = Card;

function initlializeDeck() {
    for (let s = 0; s < suits.length; s++) {
        for (let v = 0; v < values.length; v++) {
            if (suits[s] === "heart" || suits[s] === "diamond") {
                deck.push({ "suit": suits[s], "value": values[v], "color": "red" });
            } else {
                deck.push({ "suit": suits[s], "value": values[v], "color": "black" });
            }
        }
    }
    return deck;
}

initlializeDeck();
// console.log(deck);