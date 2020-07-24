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
### More DOM Manipulation

```javascript
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
```

## Result page with user input options 
### html result page
Making results.html and connecets it to main index.html under <body>

index.html
```html (index.html)
<body>
    <form action="results.html" method="get" enctype="multipart/form-data">
```    

results.html
```html (result.html)
    <h1>Results</h1>
    <div class="container">
        <div id="results"></div>
        <a href="./index.html">Back to Form</a>
    </div>
    <script src="./results.js"></script>
```
index.html 

### User input options in index.html
``` html 
 <div>
            <label for="name">Name</label>
            <input Type= "text" name = "name" id="name" required>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
        </div>
        <div>
            <label for="age">Age</label>
            <input type="number" name="age" id="age" min="1" max="200"required >
        </div>
        <div>
            <h2>Favorite Foods</h2>
            <label for="bananas">Bananas</label>
            <input type="checkbox" name="bananas" id="bananas">

            <label for="apples">Apples</label>
            <input type="checkbox" name="apples" id="apples">
        </div>
        <div>
            <label for="file">File</label>
            <input type="file" name="file" id="file">
            
        </div>
        <div>
            <button type="submit">submit info</button>
        </div>
```

## Constructor Fuctions (Javascript)
We can use contructor functions to make multiple similar objects
Write with capital letter first. 
When call, using new. 

``` javascript
function Coffee(menu, price, sweetness) {
    this.menu = menu;
    this.price = price;
    this.sweetness = sweetness;
    this.intro = function() {
        console.log(this.menu + " is " + this.price)
    }
}

let americano = new Coffee('Americano', '$4.50',false)
let vanilaLatte = new Coffee('Vanilla Latte', '$5.00', true)
console.log(americano);
console.log(americano.price);
americano.intro();
vanilaLatte.intro();
```
## Calsses (Javascript)

Classes are in fact "special functions", and just as  you can define function expressions and function delcarations, the class syntax has two componenets, the class syntax has two componenets: class expressions and class declarations. 
``` javascript
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

## promise (error)

```Javascript
let willIGetNew = new Promise(
    function (resolve, reject) {
        if (doIHaveMoney) {
            let computer = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(computer); // fulfilled
        } else {
            let reason = new Error('I am poor');
            reject(reason); // reject
        }

    }
);

console.log(willIGetnNew);
willIGetNew.then(result => {
    console.log(result);
})
```

## async/await 
Async functions are instances of the AsyncFunction constructor, and the await keyword is permitted within them. The async and awiat keywords enable asynchronous, promise-based behavior to be written in a claaner sytle, avoiding the need to explicitly configure promise chanins. 

``` javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```

## fetch
```javascript
 fetch('https://api.github.com/users/akhuh213')
 .then(response => {
     return response.json();
 })
 .then(data => {
     console.log(data);
     let githubURL = data.url;
     let githubUsername = data.login;
     let githubName = data.name;

     let alice = new githubProfile(githubUsername,githubName, githubURL);
     console.log(alice);

     alice.intro();
 }) 
```











