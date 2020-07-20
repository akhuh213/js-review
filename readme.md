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
