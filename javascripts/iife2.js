'use strict';

var CarLot = (function(otherCarLot){

//add a method to activate all events in app

	otherCarLot.activateEvents = function(){

		dataRequest.addEventListener('load', CarLot.loadComplete);
		dataRequest.addEventListener('error', CarLot.loadFailed);
		gallery.addEventListener("click", CarLot.activateCard);
		input.addEventListener("keyup", CarLot.reWriteCard);
		input.addEventListener("keypress", CarLot.deActivateCard);
		
	};




return otherCarLot;


})(CarLot || {});