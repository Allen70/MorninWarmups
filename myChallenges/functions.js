// make a function that returns the sum of a and b
// sum(1,2) === 3
function sum(a, b) {}
// make a function that returns the difference between a and b
// difference(3,2) === 1
function difference(a, b) {}
// make a function that splits a word into all of its letters
// splitTheWord('apple') === ['a','p','p','l','e']
function splitTheWord(word) {}

//make a function that splits the word inside with a substring
// splitTheWordBy('apple', 'p') === ['a','le]
function splitTheWordBy(string, substring) {}

// make a function that joins the array
// joinTheArray(['h','e','l','l','o']) === 'hello'
function joinTheArray(array) {}

// convert a letter to ascii
function wordToASCII(string) {}

// make a function that  turns the array into a comma separated list
// commaList([1,2,3,4,5]) === '1,2,3,4,5'
function commaList(array) {}

// make a function that makes every array element 'jon'

function jonify(array) {}

//make a function that splits a word  then converts each element into its ascii character
function asciify(string) {}

//make a function that sums up all elements in the array
function sumArray(array) {}
//make a function that sums up all even elements in the array
function sumEvenArray(array) {}

// make a function that returns a callback function that evaluates to hello
// let myCallback = callbackReturnsHello()
// myCallback() = 'hello'
function callbackReturnsHello() {}



module.exports = {
    sum,
    difference,
    splitTheWord,
    splitTheWordBy,
    joinTheArray,
    callbackReturnsHello,
    commaList,
    wordToASCII,
    jonify,
    asciify,
    sumArray,
    sumEvenArray
}