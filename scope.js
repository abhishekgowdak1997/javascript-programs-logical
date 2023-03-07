//scope  Scope determines the visibility or accessibility of a variable or
// other resource in the area of your code.

//types of scope
//function scope
//global scope
//block scope

// a).global scope eg   declare the variable outside  and we can use it inside
// function is global scope with var and let keywords variables can access anywhere

//function scope
let fruit = "apple";
console.log(fruit);
console.log(abc);

function getFruit() {
    var abc = "abhishek";
    console.log(abc);
    console.log(fruit);
}

getFruit();


// b).function scope if u declare a variable
// inside function u can only access within the function and cannot access outside the function

function fruitName() {
    var a = "abhishek";
    console.log(a);
}
fruitName();
console.log(a);

//c).block scope will acess with if else conditions  and only in that particular block it will work

function foo() {
    if (true) {
        var name = "abhishek"; //var keyword exist in function scope  it will prints
        let age = 24;
        const gender = "male";

        console.log(name);
        console.log(age);
        console.log(gender);
    }
    console.log(name);
    console.log(age);
    console.log(gender);
}
foo();