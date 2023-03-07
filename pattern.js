//1.5*5 pattern
function printPattern() {
    let pattern = ""

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            pattern += "*"
        }
        pattern += "\n"
    }
    return pattern

}

console.log(printPattern())

//2. left angled  pattern 

function printPattern() {
    let pattern = ""

    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j < i; j++) {
            pattern += "*"
        }
        pattern += "\n"
    }
    return pattern

}

console.log(printPattern())


//3. Downward triangle star pattern
function printPattern() {
    let pattern = ""

    for (let i = 0; i < 5; i++) {
        for (let j = 5; j > i; j--) {
            pattern += "*"
        }
        pattern += "\n"
    }
    return pattern

}

console.log(printPattern())

//4 right angled star pattern
function rightAngledPattern() {
    let n = 5
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < i; k++) {
            string += "*";
        }
        string += " \n";
    }
    return string;
}

console.log(rightAngledPattern());

//5 pyramid star pattern
function pyramidStarPattern(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }
        // printing stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
}

console.log(pyramidStarPattern(5))

// 6 reverse pyramid star pattern 

function reversePyramidStarPattern(n) {
    let string = "";
    // External loop
    for (let i = 0; i < n; i++) {
        // printing spaces
        for (let j = 0; j < i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
}
console.log(reversePyramidStarPattern(5))