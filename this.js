/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. waxa weeye ka ugu fudud uguna isticmaal kayare leh shuruucda this 
* 2. waxa ay utaa ganta sharcigan this ee labaad parents ka kore objects js ama hal ka ay kujirto hal parent u ah ayay  utaagantany 
* 3. waxay isku xidhaa fuction IYO  objects cusub si blueprint ahaan loo isticmaalaayo fuction 
* 4. waxay ay isku xidhaa fucntion iyo object 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function name(magav){
    console.log(this.magac);
}
console.log(name());
// Principle 2

// code example for Implicit Binding
const car ={
   name : 'BMW',
   version: 200-12-1;
   prodectBy :'tasla',
   customer:function(){
       return `${this.name} its price is 2 million `
   }
}

console.log(car.console());

// Principle 3

// code example for New Binding
function car (carName, varsion){
    this.carName = carName;
    this.version =version;
}
const saleCar = new car ('BMW', '2021-0-1')
console.log(saleCar);

// Principle 4

// code example for Explicit Binding
function country() {
    console.log(this.nation);
}
const state ={
    nation:'canada'
}

country.call(state)
console.log(country());