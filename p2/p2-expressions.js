/*
    CIT 281 Project 2
    Name: Kobe Pane
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//returns 1 random lower case letter when called 
const getRandomLetter = function() {
    return alphabet[getRandomInteger(0, 26)];
}

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let str = "";
for(let i = 1; i <= getRandomInteger(5, 26); i++){
    str += getRandomLetter();
}

//returns a random length string between the lengths we choose, when we call the function
const getRandomString = function(minLength, maxLength) {
    let randomString = "";
    for (let i = 1; i <= getRandomInteger(minLength, (maxLength + 1)); i++) {
        randomString += getRandomLetter();
    }
    return randomString;
}

console.log(getRandomString(10, 20));

//function takes a string, and returns the a string of the same letters, but in ascending order
const getSortedString = function(string) {
    return string.split("").sort().join("");
}
console.log(getSortedString("xpacd"));

