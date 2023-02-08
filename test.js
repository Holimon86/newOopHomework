//let dog = {
//    name: "Cujo",
//    numLegs: 4
//  };
//  console.log(dog);

//  let dog = {
//    name: "Spot",
//    numLegs: 4
//  };
//  console.log(dog.name);

//let dog = {
//    name: "Spot",
//    numLegs: 4,
//    sayName: function() { return "This dog has " + dog.numLegs + " legs.";}
//  };
//  console.log(dog.sayName())
  
//let dog = {
//    name: "Spot",
//    numLegs: 4,
//    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
//  };
  
//  console.log(dog.sayLegs());

//class MyClass {
//    constructor(name, age) {
//         this.name =  name; this.age = age;
//    }
//    access_name() {
//      return this.name;
//    }
//    access_age() {
//         return this.age;
//    }
//  }
  
//  let classConstructor = new MyClass("Joe", 23);
//  classConstructor.access_name() 
//  classConstructor.access_age() 
  
//function Dog() {
//    this.name = "Rupert";
//    this.color = "brown";
//    this.numLegs = 4;
//  }
//  let hound = new Dog();

//function Dog(name, color){
//    this.name = name;
//    this.color = color;
//    this.numLegs = 4;
//   }
  
//   let poodle = new Dog ("Kirby", "black and gray");

//function House(numBedrooms) {
//    this.numBedrooms = numBedrooms;
//  }

//  let myHouse = new House(4);
//  myHouse instanceof House;

//let canary = new Bird("Tweety");
//let ownProps = [];
//for(let property in canary){
//  if(canary.hasOwnProperty(property)){
//    ownProps.push(property)
//  }
//}
//console.log(ownProps);

//function Dog(name) {
//    this.name = name;
//  }
  
//  Dog.prototype.numlegs = 4;
//  Dog.prototype.bark = "woof";
  

//  let beagle = new Dog("Snoopy");