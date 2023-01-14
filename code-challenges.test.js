// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("wordCoder", () => {
    it("takes in a string and returns a string with a coded message", () => {
        expect(wordCoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(wordCoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(wordCoder(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.

// PSEUDOCODE

// Input: a string
// Output: the inputted string in a coded format

// Create and object of key/value pairs for the original characters and what we want the replacements to be
// Create a function called "wordCoder" that has a parameter of a string
// Use the ".replace" method to search through each string
// Use regex to look for the charactsters we are interested in, globally and for upper and lower case
// When a matching character is found, use the object to replace the found character with the desired character


const replacementLetters = {
    A: 4,
    a: 4,
    E: 3,
    e: 3,
    I: 1,
    i: 1,
    O: 0,
    o: 0
}

const wordCoder = (string) => {
    return string.replace(/[aeio]/gi, (match) =>
        replacementLetters[match])
    }

 
// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe('wordFinder', ()=> {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        expect(wordFinder(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(wordFinder(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

// PSEUDOCODE

// Input: an array of words and a single letter
// Output: an array of all the words containing that particular letter

// Decalare a function called "wordFinder" that has parameters for an array and a search letter
// Use the ".filter" method to looks for a pattern in each array item
// Use the ".includes" method to look check if an array item includes the search letter, accounting for upper and lowercase letters with the OR logical operator

const wordFinder = (array, searchLetter) => {
    return array.filter(item => item.includes(searchLetter.toUpperCase()) | item.includes(searchLetter.toLowerCase()))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe('fullHouse', () => {
    it('takes in an array of 5 numbers and determines whether or not the array is a "full house"', () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// b) Create the function that makes the test pass.

// PSEUDOCODE

// Input: an array of 5 numbers
// Output: true is values are a full house, otherwise false

// Declare a function called "fullHouse" with a parameter for an array
// Find a function on the internet that compares to see if all values in an array are equal, but understand how it works
// Sort the inputted array using the ".sort" method
// Take the sorted array and create two additional arrays using the ".slice" method: one that contains the first two value and another that contains the last three values and another set that contains the first three values and the last two values
// Use the internet function with the new sorted and slices arrays to see if the first slice is all equal and the second slice is all equal
// Use the ternary operator to return "true" if the comibination of 2/3 or 3/2 values are all true, false if otherwise



const equalItems = array => array.every(item => item === array[0]);

const fullHouse = (array) => {
    let sortedArray = array.sort()
    return equalItems(sortedArray.slice(0, 2)) && equalItems(sortedArray.slice(-3)) || 
    equalItems(sortedArray.slice(0, 3)) && equalItems(sortedArray.slice(-2)) ? true : false
}


