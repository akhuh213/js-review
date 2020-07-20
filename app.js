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























