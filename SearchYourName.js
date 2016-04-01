/*jshint multistr:true */

var text = "This is Mansi. I am Mansi Jain. Mansi Jain is my name. Blah Blah Blah Blah Mansi Blah Blah";

var myName = "Mansi";

var hits = [];

for(var i = 0; i < text.length; i++){
    if(text[i] === "M"){
        for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
    }
}

if(hits.length === 0){
    console.log("Your name wasn't found!")
}
else{
    console.log(hits);
}
