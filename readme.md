# JavaScript Review

## Examples of Data Types

```javascript
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

```
## Examples of Functions

``` javascript
//standard expression
function addNumbers(num1,num2){
    return num1+num2;
}
//function expression
const multiplyNumbers = function(num1, num2){
    return num1*num2;
}
// arrow function 
const subtract = (num1,num2) => {
    return num1-num2;

```


## DOM Manipulation

```javascript
const container = document.querySelector('.container');
console.log(container);

const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS Review';


container.appendChild(headerTwo);
headerTwo.classList.add('subtitle','header-two');
//headerTwo.setAttribute('class', 'header-two');

headerTwo.classList.remove('header-two');
console.log(headerTwo);

```