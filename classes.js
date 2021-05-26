// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.

// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

// class Animal {
//   constructor(attr) {
//     this.name = attr.name;
//     this.location = attr.location;
//     this.work = attr.work
//   }
  
//   job(){
//     return `${this.name} is a ${this.work}`;
//   }
// }

// const fartun = new Animal ({
//   name: "Fartun",
//   location: "Minnesota",
//   work: "Nurse"
// })

// console.log(fartun.job())
class Person{

    constructor(attr){
        this.Name = attr.Name;
        this.Age =attr.Age;
        this.Hobby =attr.Hobby;

    }
    Speak(){
        return `Hello, My name is ${this.Name}  and I'm ${this.Age} age + years old. I love ${this.Hobby}`
    }
}

const father = new Person({
    Name :'Mohamed',
    Age :60 ,
    Hobby: 'Politics'
})
console.log(father.Speak());


const mother = new Person({
    Name :'Hibo',
    Age :50,
    Hobby: 'Cooking'
})
console.log(mother.Speak());

const brotherone = new Person({
    Name :'Mouse',
    Age :30 ,
    Hobby: 'Arts'
})
console.log(brotherone.Speak());

const brTwo = new Person({
    Name :'Sharmarke',
    Age :20 ,
    Hobby: 'Football'
})
console.log(brTwo.Speak());

const sisterOne = new Person({
    Name :'Sucaad ',
    Age :15,
    Hobby: 'Computer science'
})
console.log(sisterOne.Speak());

const sisterTwo= new Person({
    Name :'Maryan',
    Age :25 ,
    Hobby: 'writing '
})
console.log(sisterTwo.Speak());
// Extend Person class and create one class for each member of your family.