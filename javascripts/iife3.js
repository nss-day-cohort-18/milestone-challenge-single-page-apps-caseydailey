'use strict';

var CarLot = (function(otherCarLot){


otherCarLot.activateCard = function(e) {

	if (e.target.parentNode.classList.contains("card")) {
		let cardsArray = Array.from(document.getElementsByClassName("card"));
		cardsArray.forEach((card) => card.classList.remove("active"));
		e.target.parentNode.classList.add("active");
		input.focus();
		input.value = "";
	}
}

otherCarLot.reWriteCard = function(e) {
	let inputValue = input.value;
	let card = document.querySelector(".active");
	let description = card.querySelector(".description");
	description.innerHTML = inputValue;
}

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
