/**
 * Author: Mikos Bazerkanian
 * Purpose: Creates a Player Class that holds information on the Player
 * Including the Players name, their total points, their role in the game
 * and their hand.
 **/


class Player{
    constructor(name){
        this.name = name;
        this.points = 0;
        this.hand = [];
        this.discard = []; // Player cards that have been used.
        this.role = false;
    }

    addPoints(numPoints){
        this.points += numPoints;
        // Change with point operations function later
    }

    becomeDealer(){
        this.role = true;
    }

}

