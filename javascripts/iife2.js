'use strict';
console.log('iife 2 is linked');

var input = document.getElementById("input");
// var body = document.querySelector("body");

var CarLot = (function(otherCarLot){

		gallery.addEventListener("click", activateCard);
		input.addEventListener("keyup", reWriteCard);
		input.addEventListener("keypress", deActivateCard);
		

		function activateCard (e) {
	
			if (e.target.parentNode.classList.contains("card")) {
				let cardsArray = Array.from(document.getElementsByClassName("card"));
				cardsArray.forEach((card) => card.classList.remove("active"));
				e.target.parentNode.classList.add("active");
				input.focus();
				input.value = "";
			}
		}

		function reWriteCard (e) {
			let inputValue = input.value;
			let card = document.querySelector(".active");
			let description = card.querySelector(".description");
			description.innerHTML = inputValue;
		}

		function deActivateCard(e){
			if (e.keyCode === 13) {
				let cardsArray = Array.from(document.getElementsByClassName("card"));
				cardsArray.forEach((card) => card.classList.remove("active"));
				input.value = "";
				input.blur();
			}
		}




return otherCarLot;


})(CarLot || {});