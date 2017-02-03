'use strict';

var CarLot = (function(otherCarLot){

		var inventory = [];

		otherCarLot.loadInventory = function(){
		
				dataRequest.open("GET", "../inventory.json");
				dataRequest.send();

		otherCarLot.loadComplete = function(load){
				let carData = JSON.parse(load.target.responseText);
				handleCars(carData, inventory);
			}

		otherCarLot.loadFailed = function(load) {
				console.log("data failed", load.target.responseText);
			}
				
				// this takes the parsed data (an object holding an array of objects)
				// puts each object in an array of objects and passes that to push and display functions
				
				function handleCars(carObject, array){
				
					for (var car in carObject){
						array = carObject[car];
						pushCars(array);
						displayCars(array);
					  }

					}
				
				function pushCars(array) {
						array.forEach(obj=>inventory.push(obj));
					}

				//this function is passed an array of objects
				//it will iterate through this and for each item, build up a string,
				//consisting of its values and incrementally add those to cards, three at a time,
				//to another string, which will be inserted to gallery (a container element) as a row with 3 columns
				
				function displayCars(array) {

						var counter = 0;

						array.forEach(car => {

							cards += `<div class="col-lg-4 col-sm-4 col-xs-6 card">
		    					 	<h4>${car.year} ${car.make} ${car.model}</h4>
		    					 	<img class="thumbnail img-responsive" src="../${car.image}">
		    					 	<p class="description">${car.description}</p>
		    					 	<p><small>${car.price}</small></p>
		    					 	</div>`;

		    				counter++;
		    				
		    				if (counter % 3 === 0) {
		    					var rowCount = 1;
		    					gallery.innerHTML += `<section class="row">${cards}</section>`;
		    					rowCount ++;
		    					cards = ""; 
		    				}

					}); //end forEach

				} //end display function

	}; // end the big loader

	//getter
	otherCarLot.getInventory = function(){
		return inventory;
	};

	
	return otherCarLot;


})(CarLot || {});