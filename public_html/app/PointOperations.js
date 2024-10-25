
function calculateFifteen(listOfNums){
    start = 0;
    tempHand = [];
    fullHands = [];
    for(var i = 0; i < listOfNums.length; i++){
        tempHand = [];
        tempHand.push(listOfNums[i]);
        for(var j = i + 1; j < listOfNums.length; j++){
            tempHand.push(listOfNums[j]);
            if(d3.sum(tempHand) > 15){
                tempHand.pop();
            }
            if(d3.sum(tempHand) == 15){
                console.log(tempHand);
                fullHands.push(tempHand);
                tempHand.pop();
            }
        }
    }
}


calculateFifteen([10,9,8,7,6,5,4,1])