class Person{
    constructor(name, confidence, charisma, requiredConfidence){
        this.name = name;
        this.confidence = confidence;
        this.charisma = charisma;
        this.requiredConfidence = requiredConfidence
    }
    convince(){

    }
    discourage(){

    }
}

let me = new Person("Al", 100, 30, 20);


class FriendGroup {
    constructor(){
        this.goingOnTrip = false;
        this.friends = [];
    }
    addFriend(name, confidence, requiredConfidence, charisma){
        this.friends.push(new Person(name, confidence, requiredConfidence, charisma));
    }
}

let myFriendGroup = new FriendGroup();

myFriendGroup.addFriend("Jared", 10, 60, 10);
myFriendGroup.addFriend("Sarah", 10, 65, 10);
myFriendGroup.addFriend("Sasha", 10, 50, 10);
myFriendGroup.addFriend("Darren", 10, 70, 10);

console.log(myFriendGroup);