'use strict';
console.log('CarLot iife #1 is linked');

var gallery = document.getElementById("gallery");
var carsArray = "";
var card = "";

var CarLot = (function(otherCarLot){

		var inventory = [];

		var dataRequest = new XMLHttpRequest();

		dataRequest.addEventListener('load', loadComplete);
		dataRequest.addEventListener('error', loadFailed);

		// This parses the JSON and passes it to storeCars
		function loadComplete(load){
			let carData = JSON.parse(load.target.responseText);
			storeCars(carData, inventory);
		}

		// logs the fail message
		function loadFailed(load) {
			console.log("data failed", load.target.responseText);
		}
		
		// iterate through and push each object to the inventory array
		function storeCars (carObject, array){
		
			for (var car in carObject){
				array = carObject[car];
				displayCars(array);
				pushCars(array);
			  }
		}

		function pushCars (array) {
			array.forEach(obj=>inventory.push(obj)); 
		}

		
		function  displayCars(array) {
			
    		// var rowOne = document.createElement("section");
    		// rowOne.classList.add("row");
    		// gallery.appendChild(rowOne);
    	
    		// var rowTwo = document.createElement("section");
    		// rowTwo.classList.add("row");
    		// gallery.appendChild(rowTwo);

			var counter = 0;
			array.forEach(car => {

				card += `<div class="col-lg-4 col-sm-4 col-xs-6 black-border">
    					 <h4>${car.year} ${car.make} ${car.model}</h4>
    					 <img class="thumbnail img-responsive" src="../${car.image}">
    					 <p class="${counter}">${car.description}</p>
    					 <p><small>${car.price}</small></p>
    					 </div>`;

    				counter++;
    				console.log('counter:', counter);
    				console.log('card:', card);

    				if (counter % 3 === 0) {
    					var rowCount = 1;
    					gallery.innerHTML += `<section class="row">${card}</section>`;
    					rowCount ++;
    					card = ""; 
    				}
			}); 

		}//end display function

	// public method to get inventory 
	otherCarLot.getInventory = function(){
		return inventory;
	};

	/////// open and send the request
	dataRequest.open("GET", "../inventory.json");
	dataRequest.send();

	/////// returns augmented iife
	return otherCarLot;


})(CarLot || {});