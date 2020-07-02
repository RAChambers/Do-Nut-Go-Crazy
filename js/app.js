// var foo = "Tester"   - predates ES 5 - out of style.
// let is changeable.
//const is constant.

let foo = "Ben";
console.log('"Hello", ' + foo);

foo = "Cliff";
console.log("Hello, " + foo);
// == is a check on equality that converts types.
// ===

// let count = 0;

// while (count < 10) {
//     console.log(count);
//     count++;
// }

// let colors = ["Brown", "Blue", "Red"]
// console.log(colors)
// console.log(colors.push("Green"))
// console.log(colors)
// console.log(colors.splice(2, 1))
// console.log(colors);

// const sampleJsonPerson = {
//     "name": "Ben",
//     "age": 42,
//     "car": {
//         "model": "Civic",
//         "make": "Honda"
//     }
// }
// console.log(sampleJsonPerson);
// console.log(sampleJsonPerson.age);
// console.log(sampleJsonPerson.car.model);
// sampleJsonPerson.age -= 10;
// sampleJsonPerson.car.model = "Prelude";
// console.log(sampleJsonPerson)
// console.log(sampleJsonPerson.age);
// console.log(sampleJsonPerson.car.model);

function reallyOldAndShouldntDoThis(params) {
    console.log("Subject to hoisting.")
}

const aBetterWay = function (params) {

}

const anotherBetterWay = () => {

}

const stuffToDisplay = stuffToDisplay => console.log(stuffToDisplay);

stuffToDisplay("Hello World.");