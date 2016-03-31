// Check if the user is ready to play!


confirm("I am ready to play!");

var age;

age = prompt("What's your age?");

if(age < 13){
    console.log("You're below 13. Play at your own risk!");
}
else{
    console.log("Get onboard. Play this game!");
}

var intro;

intro = "You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'";

console.log(intro);

var var1 = "Suddenly, Bieber stops and says, 'Who wants to race me?'";

console.log(var1);

var userAnswer = prompt("Do you want to race Bieber on stage?");

if(userAnswer == "yes"){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
    else{
        console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
    }

var feedback = prompt("Rate this game on scale on 10!");

if(feedback >= 8){
    console.log("Thank you! We should race at the next concert!");
}
else{
    console.log("I'll keep practicing coding and racing.");
}
