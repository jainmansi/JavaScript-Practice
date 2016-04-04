var friends = {
    bill:{
        firstName: "Bill",
        lastName: "Gates",
        number: "(555) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
        },

    steve:{
        firstName: "Steve",
        lastName: "Jobs",
        number: "(666) 666-6666",
        address: ['10 Apple St','San Jose','CA','111111']
        }
};

var list = function(friends){
    for(var friend in friends){
        console.log(friend);
    }
};

var search = function(name){
    for(var friend in friends){
        if(friends[friend].firstName === name){
            console.log(friends[friend]);
            return friends[friend];
        }
    }
};
