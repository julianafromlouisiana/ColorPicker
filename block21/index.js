//Write code that has a constructor function called Car
//Creates a new opject with: make, model, year

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Add method called getDescription to car prototype and return a string

getDescription() {
    return `${this.make}, ${this.model}, and was made in ${this.year}`
}

}

//Define the ElectricCar function as a subclass
// Add a property called range 
class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }
//override electric car info range info
    getDescription() {
        return `${super.getDescription()} the range of car is ${this.range}`;
    }
}

//Create Const of ElectricCar with make "Tesla" model "Model S" and year "2019" range of "300
//getDescription then output string 

const car1 = new ElectricCar("Tesla", "Model S", 2019, 300);

console.log(car1);
console.log(car1.getDescription());




