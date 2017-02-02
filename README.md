# Single Page Applications Milestone Challenge

to Run:

```bash
cd lib 
npm install
grunt
```



When your work in complete, push up the branch (`git push origin challenge`) and submit the pull request on Github.

## Instructions

You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure.

### Behavior

1. Create an array of cars in the `inventory.json` file (see example structure below). Put at least three cars in the array.
1. When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
1. Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of `container`. __Hint:__ You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.
1. Put a standard Bootstrap navbar element at the top of your page.
1. Put a text input field in the navigation bar.
1. Make sure you display all properties of the car in the DOM. Basic styling is up to you.
1. Make sure that each car card element has a CSS class which adds a black border around it.
1. When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
1. Also, on click of the car element, clear the value of the text input in the navbar, and put the [cursor in the text input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
1. When you start typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

### Technical Requirements

1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
1. The first IIFE should add a public function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. `getInventory`).
1. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
1. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    1. A car DOM element that was clicked on.
    1. A color name of your choice (see behavior requirement 5 above).

# Starter Code

Please read, and feel free to use the code below to get started.

##### inventory.json

```json
{
  "cars": [
    {
      "make": "Nissan",
      "model": "Rogue",
      "year": "2006",
      "price": "8999",
      "description": "This is an immaculate 2006 Nissan Rogue with only 25000 miles on it. Leather seats, power everything."
    }
  ]
}
```

##### main.js

```js
function populatePage (inventory) {
  // Loop over the inventory and populate the page
  
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
```

##### CarLot.js

```js
var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {

      });
    }
  };

})();
```
