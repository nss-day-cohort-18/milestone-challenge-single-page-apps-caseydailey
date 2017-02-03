'use strict';

var CarLot = (function(otherCarLot){

		var inventory = [];

		otherCarLot.loadInventory = function(){
		
		dataRequest.open("GET", "../inventory.json");
		dataRequest.send();

		otherCarLot.loadComplete = function(load){
			let carData = JSON.parse(load.target.responseText);
			storeCars(carData, inventory);
		}

		 otherCarLot.loadFailed = function(load) {
			console.log("data failed", load.target.responseText);
		}
		
		// iterate through and push each object to the inventory array
		function storeCars(carObject, array){
		
			for (var car in carObject){
				array = carObject[car];
				displayCars(array);
				pushCars(array);
			  }
		}

		function pushCars(array) {
			array.forEach(obj=>inventory.push(obj));
			console.log('inventory in push function:', inventory); 
		}
			console.log('inventory out of push function:', inventory);

		function displayCars(array) {

			var counter = 0;
			array.forEach(car => {

				card += `<div class="col-lg-4 col-sm-4 col-xs-6 card">
    					 <h4>${car.year} ${car.make} ${car.model}</h4>
    					 <img class="thumbnail img-responsive" src="../${car.image}">
    					 <p class="description">${car.description}</p>
    					 <p><small>${car.price}</small></p>
    					 </div>`;

    				counter++;
    				
    				if (counter % 3 === 0) {
    					var rowCount = 1;
    					gallery.innerHTML += `<section class="row">${card}</section>`;
    					rowCount ++;
    					card = ""; 
    				}
			}); 

		}//end display function
	};// end the big loader

	// public method to get inventory 
	otherCarLot.getInventory = function(){
		return inventory;
	};

	
	return otherCarLot;


})(CarLot || {});