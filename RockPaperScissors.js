
var userChoiceFunction = function(){
    prompt("Do you choose rock, paper or scissors?");
};

var userChoice = userChoiceFunction();

if(userChoice != "rock" || userChoice != "paper" || userChoice != "scissors"){
    console.log("Enter appropriate value");
    userChoice = userChoiceFunction();
}

else{
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
}


var compare = function(userChoice, computerChoice){
    if(userChoice === choice2){
        return "The result is a tie!"
    }
    else if(userChoice === "rock"){
        if(computerChoice === "scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    else if(userChoice === "paper"){
        if(computerChoice === "rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    else if(userChoice === "scissors"){
        if(computerChoice === "rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
};
