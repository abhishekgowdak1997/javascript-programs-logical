//1. write a function to return string when you enter a number 
function numberToStrings(number) {
    let numberString = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
    if (number < 0 || number > 10 || isNaN(number)) {
        return "please enter numbers between 0 to 100"
    }

    return numberString[number]

}
console.log(numberToStrings(9))


//2. write a function to return a string when you enter a number with creating a 2 arrays
function numberToString(number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const multiplesOfTen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 0 || number > 100 || isNaN(number)) {
        return 'Please enter a valid number between 0 and 100';
    }

    let str = '';
    if (number === 100) {
        str += 'one hundred';
    } else if (number >= 20) {
        str += multiplesOfTen[Math.floor(number / 10) - 2];
        if (number % 10 !== 0) {
            str += '-' + ones[number % 10];
        }
    } else {
        str += ones[number];
    }

    return str;
}
console.log(numberToString(8))

//3. write a function to return a string using for loop 

let name = "abhishek"
let reverse = ""

for (let i = name.length - 1; i >= 0; i--) {
    reverse += name[i]
}
console.log(reverse)

//Write a function to reverse a number using for loop
let number = 1234
let string = number.toString()
let rev = ""
// 4.when you are using for loop with checking length the number will not allow with length hence u need to convert it to string and later then you need to convert it into number

for (let i = string.length - 1; i >= 0; i--) {
    rev += string[i]
}
let reversedNumber = parseInt(rev)
console.log(reversedNumber)

// reverse a string using array methods 
function reverseString(str) {
    let reversed = str.split("").reverse().join("")
    return reversed
}
console.log(reverseString("abhishek"))

// reverse a number using array methods 
function reverseNumber(num) {
    let rev = num.toString().split("").reverse().join("")
    return rev
}
console.log(reverseNumber(5432))

function reverseString(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
console.log(reverseString("abhishek"))

// 5. find the duplicate methods in an array
// using set methods it removes the duplicate elements and returns it as an object

let num = [4, 5, 6, 7, 8, 5, 9]
let num2 = new Set(num)
console.log(num2)

//using filter u can find the duplicate elements in an array
const arr = [4, 5, 8, 6, 9, 7, 8, 5]
const arr2 = arr.filter((item, index) =>
    arr.indexOf(item) !== index
)
console.log(arr2)


//6 find the total number of the given element 5432

function calculateNumbers(num) {
    let words = num.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b))
    return words
}
console.log(calculateNumbers(5432))

// 7. longest letter using for of loop
function longestWord(str) {
    let words = str.split(" ")
    let longest = ""

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    return longest

}
console.log(longestWord("I love Javascript"))

//8 write a function to check whether the string element is a palindrome or not 

function palindrome(str) {
    let arrstr = str.split("").reverse().join("")
    if (str == arrstr) {
        return `string reverse is palindrome ${arrstr}`
    } else {
        return `not a palindrome ${arrstr}`
    }
}

console.log(palindrome("abhishek"))

//9.how to add total elements in an array using for loop and using reduce method
//using reduce method 

let arr =[1,2,3,4,5,6]

let arr2=arr.reduce((item,index)=>{
    return item+index
})
console.log(arr2)

// using for loop
let arr =[1,2,3,4,5,6]
let totalelements=0
for(let i=0;i<arr.length;i++){
    totalelements+=arr[i]
    
}

console.log(totalelements)
