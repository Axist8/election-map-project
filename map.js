function candidator(name){
    let candidate = {};
    candidate.name = name;
    candidate.result = null;
    candidate.votes = 0;
    candidate.tally = function(){
        let total = 0;
        for (let i = 0 ; i < ford.result.length ; i++){
            total = total + ford.result[i];
        }
        candidate.votes = total;
    }
    return candidate;
}

let ford = candidator("Joe Ford");
let axel = candidator("Axel Thesleff");

ford.result = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
axel.result = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

ford.result[9] = 1;
axel.result[9] = 28;
ford.result[4] = 17;
axel.result[4] = 38;
ford.result[43] = 11;
axel.result[43] = 27;

ford.tally();
axel.tally();

function victor(){
    if (ford.votes === axel.votes){
        console.log("DRAW!");
        return "Draw";
    } else if (ford.votes > axel.votes){
        console.log("Congratulations, Joe Ford our new President!");
        return "Joe Ford";
    } else {
        console.log("Congratulations, Axel Thesleff our new President!");
        return "Axel Thesleff";
    }
}
victor();