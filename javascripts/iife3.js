'use strict';
//introduce methods to activate, reWrite, and deActivate a card

var CarLot = (function(otherCarLot){

//if the click was on a node in a card
//give the card the class "active"
//and bring focus to input
	otherCarLot.activateCard = function(e) {
		if (e.target.parentNode.classList.contains("card")) {
			e.target.parentNode.classList.add("active");
			input.focus();
		}
	}

//find whatever has class active, get ahold of it's "description" element
//and set it's innerHTML to input's value
	otherCarLot.reWriteCard = function(e) {
		let card = document.querySelector(".active");
		let description = card.querySelector(".description");
		description.innerHTML = input.value;
	}
	
//this deActivates the card on enter
	otherCarLot.deActivateCard = function(e){
		if (e.keyCode === 13) {
			let cardsArray = Array.from(document.getElementsByClassName("card"));
			cardsArray.forEach((card) => card.classList.remove("active"));
			input.value = "";
			input.blur();
		}
	}

return otherCarLot;

})(CarLot || {});
