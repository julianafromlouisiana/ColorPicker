//Create a JavaScript class of Home
//Include constructor th accepts:room, bathrooms, squareFeet
//use this method to return keywords
// number of rooms, bathrooms and how square feet

class Home {
    constructor(rooms, bathrooms, squareFeet) {
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.squareFeet = squareFeet;
    }
 
    
    printInfo() {
        return `This home has ${this.rooms}, ${this.bathrooms}, is ${this.squareFeet} and has a yard size of ${this.yardSize}`;

    }
}

class SingleFamilyHome extends Home {
    constructor(rooms, bathrooms, squareFeet, yardSize) {
        super(rooms, bathrooms, squareFeet);
        this.yardSize = yardSize;
    }

    printInfo() {
        return `$super.printInfo()} It has a ${this.yardSize} square foot yard`;
    }
    
}

class Apartment extends Home {
    constructor(rooms, bathrooms, squareFeet, floor) {
        super(rooms, bathrooms, squareFeet);
        this.floor = floor;
    }

    printInfo() {
        return `${super.printInfo()} It is on floor ${this.floor}.`;
    }
}

