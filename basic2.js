//1.capitalize every first letter in javascript 
function capitalize(str) {
    let words = str.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return words.join(" ")
}
console.log(capitalize("abhishek how are you "))

//2.Find the repeated letters in a string
function repeatedLetters(str) {
    return str.split("").filter((letter, index) => str.indexOf(letter) !== index && str.lastIndexOf(letter) === index)
}
console.log(repeatedLetters("abhishek"))

//3 capitalize only the first letter of a string 
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("abhishek"))

// 4 .find the total elements in an array if it is more than 10 add the other elemnets
function addData(data) {
    let convertToString = data.toString()
    let convertToArray = convertToString.split("").map((data) => {
        return parseInt(data)
    })

    let totalSum = convertToArray.reduce((a, b) => a + b)
    if (totalSum > 10) {
        addData(totalSum)
    } else {
        console.log(totalSum)
    }

}

addData(5431)


// 5.Find the sum of two elemnts of an array is equal or not 

//sum of two elements is equal or not 
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var totalarray1 = arr1.reduce((a, b) => a + b)
var totalarray2 = arr2.reduce((a, b) => a + b)

console.log(totalarray1)
console.log(totalarray2)

if (totalarray1 === totalarray2) {
    console.log("true")
} else {
    console.log("false")
}

// 6. write a program to check array elements are equal and length is also qual u must use && operator  if array1 and array2 are length is same and also index is same then it will return true 

var array1 = [4, 8, 9, 10];
var array2 = [4, 8, 9, 11];

var is_same = (array1.length == array2.length) && array1.every(function (element, index) {
    return element === array2[index];
});

console.log(is_same)
