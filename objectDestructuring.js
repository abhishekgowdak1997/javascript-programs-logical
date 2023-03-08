// array destructuring 

let fruits = ["apples", "mangoes", "pineapples"]
// with old method 
let fruitOne = fruits[0]
let fruitTwo = fruits[1]
let fruitThree = fruits[2]

console.log(fruitOne)
console.log(fruitTwo)
console.log(fruitThree)

// with new method of destructuring
const [firstFruit, secondFruit, thirdFruit] = fruits

console.log(firstFruit)
console.log(secondFruit)
console.log(thirdFruit)

const [first, ...second] = fruits

console.log(first)
console.log(second) // this will give output in an array 

//note you cannot add rest element to first position or index


// object destructuring 

let secondPerson = {
    name: "venky",
    age: 24,
    gender: "male",
    city: "Bangalore"
}

// with old way 

// let getName=secondPerson.name
// console.log(getName)
// let getGender=secondPerson.gender
// console.log(getGender)

// with new way destructuring it and getting a single value 

const { name, age, gender, city } = secondPerson
console.log(name)
console.log(age)
console.log(gender)
console.log(city)

console.log(secondPerson) // to get all the object items 