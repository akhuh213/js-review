let name = 'Alice Huh';
let age = 35;
let isCool = true;
const friends = ['Kate','Scarlett','Sky', 'Sean', 'Julie'];

const tesla = {
    industry: 'Electric Cars',
    founder: 'Elon Musk',
    yearFounded: 2003,
    foundingmembers: ['Elon Musk', 'JB Straubel', 'Martin Eberard'],
    stockTicker: 'TSLA',
    vehicles: {
        vehicleOne: 'Model S',
        vehiclesTwo: 'Model X',
        vehicleThree: 'Model 3'
    },
    print: function() {
        console.log("The CEO of Tesla is " + this.founder);
    }
}

tesla.stockPrice = 1643.00;

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);
console.log(tesla.vehicles.vehicleThree);
console.log(tesla['vehicles']['vehicleThree']);


tesla.print()

function printFriends(array) {
    array.forEach(friend => {
        console.log(friend);
    });
}
printFriends(friends);

const starbucks = {
    location: "2300 matties pl",
    contact: '440-332-3423',
    promotion: 'buy one get one free',
    menu: {
        greenTeaFrap: '$5.00',
        americano : '$3.00',
        vanilaLatte:  '$4.00'
    },
    print: function() {
        console.log ("The price of Vanila Latte is " + this.menu.vanilaLatte);
    }
}
starbucks.print()

//standard function
function findingPrice(menu1,menu2){
    return menu1 + menu2;
}
findingPrice(starbucks.menu.americano, starbucks.menu.vanilaLatte);


//function expression
const multiplyNumbers = function(num1, num2){
    return num1*num2;
}


// arrow function 
const subtract = (num1,num2) => {
    return num1-num2;
}

//DOM
const container = document.querySelector('.container');
console.log(container);

const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS Review';


container.appendChild(headerTwo);
headerTwo.classList.add('subtitle','header-two');
//headerTwo.setAttribute('class', 'header-two');

headerTwo.classList.remove('header-two');
console.log(headerTwo);

//EventListener
//change the txt to this
headerTwo.addEventListener('click', function(){
    headerTwo.textContent = 'Alice';
});

// make another element

const headerThree = document.createElement('h2');
headerThree.textContent = 'Friends';

container.appendChild(headerThree);
console.log(headerThree);



// iterate through my friends array 
// reference each friend
// create a li
// add textContent to that li
// append that to a ul (undordered list)

const list = document.createElement('ul');
for (let i = 0; i < friends.length; i++ ) {
    let eachFriend = friends[i];

    const listItem = document.createElement('li');
    listItem.textContent = eachFriend;

    list.appendChild(listItem);
}
//console.log(list);
headerThree.addEventListener('click', function(){
    container.appendChild(list);
});

// problem solving

// - [ ] Do I understand what the prompt is asking?
// - [ ] Am I able to break the problem down?
// - [ ] What is my strategy for solving the problem?
// - [ ] Do I understand what my code is doing?
// - [ ] Am I able to foresee any edge cases?
// - [ ] Am I able to track the order of the code that is being executed?
// - [ ] Am I able to track the values of the variables?
// - [ ] Am I able to walk through my code line by line with an example?
// - [ ] Do I have a working solution?

//fizzBuzz
    // takes in an array
    // check each number in the array
    // // if the number is divisible 5 and 3 === fizzbuzz 
    // if the number is divisible by 3 === fizz
    //if the number is divisible by 5 === buzz 
//return an array


    //[3,5,15,20,9,7]
    //['Fizz', 'Buzz', ...]
// I need to set up an empty array
//iterate through the array that going to be passed in
//check the remainder of each element
//push the result of each element inside the result array
//result that result array

function fizzBuzz(array) {
    let result = [];

    for (let i = 0; i <array.length; i++) {
        let num = array[i];
        if (num % 3 === 0 && num % 5 ===0) {
            result.push('FizzBuzz')
        }else if (num % 3 === 0) {  
            result.push('Fizz')
        }else if (num % 5 === 0) {
            result.push('Buzz');
        }else {
            result.push(num);
        }
    }
    return result;
}

console.log(fizzBuzz([3,5,15,20,9,7]));

//inside
function isInside(array,ele){
    for (let i=0; i<array.length; i++){
        if (array[i] === ele){ 
            return true
        }
    }
    return false
} 
const array = ['a','b','c']
console.log(isInside(array,'b'))



//reverse string 
function reverseStr(str){
    var splitReverse = str.split('');
    var reverseArray = splitReverse.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

console.log(reverseStr('hello'))

// luckyseven 
function luckySeven(max){
     let result = []
     for (i=0; i<=max; i++){
         if(i%7===0){
            result.push(i)
         }
     }
     return result
}
    console.log(luckySeven(25));


function copyMachine(element, num){
    let result = []
    for (i = 0; i< num; i++){
        result.push(element)
    }
    return result
    }
        
console.log(copyMachine('Apple', 3))


function everyOtherWord(sentence){
     let result = [];
     let splitSentence = sentence.split(' ')
     for(i = 0; i < splitSentence.length; i += 2){
         result.push(splitSentence[i])
     }
     return result;
 }
console.log(everyOtherWord("This is what I do"))

// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// let sent = "Stop it now! Please, wont you stop?";
// let yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// let words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true



function wordYeller(sentence){
    let splitSen = sentence.split(' ')
    let emptyArray =[]
    for(i = 0; i < splitSen.length; i++){
        var word = splitSen[i]
        var lastLetter = word[word.length - 1]
        if ((lastLetter === "!")||(lastLetter === ".")) {
            emptyArray.push(word)
        }else {
            emptyArray.push(word + "!") 
        }
    }
    let finalString = emptyArray.join(' ');
    return finalString
}
console.log (wordYeller("Wow! This is amazing!"))


// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]

function arraySubstring(words, str){
    let result = []
    for (i = 0; i <words.length; i++){
        var firstletters = words[str.length]
        if (firstletters == str){
        result.push(true);
        }else{
        result.push(false);
    }
    }
    return result
}
console.log(arraySubstring(['love','loop','lep'],'lo'));

// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"

// function evenCaps(sentence){
//     let splitArr = sentence.split('') 
//     for(i=0; i<=splitArr.length; i+=2){
//         let upperArr= splitArr[i].toUpperCase()
//         console.log(upperArr)
//         let joinArray = upperArr.join("")  
//     } return joinArray
// } 
// console.log(evenCaps('This is lovely'))

