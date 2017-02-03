'use strict';

var CarLot = (function(otherCarLot){

	otherCarLot.activateEvents = function(){

		dataRequest.addEventListener('load', (e)=>{
			CarLot.loadComplete(e);
		});
		dataRequest.addEventListener('error', (e)=>{
			CarLot.loadFailed(e);
		});

		gallery.addEventListener("click", (e)=>{
			CarLot.activateCard(e);
		});
		input.addEventListener("keyup", (e)=>{
			CarLot.reWriteCard(e);
		});
		input.addEventListener("keypress", (e)=>{
			CarLot.deActivateCard(e);
		});
	};




return otherCarLot;


})(CarLot || {});