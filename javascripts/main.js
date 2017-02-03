"use strict";

var dataRequest = new XMLHttpRequest();
var gallery = document.getElementById("gallery");
var carsArray = "";
var card = "";
var input = document.getElementById("input");

CarLot.loadInventory();
CarLot.activateEvents();
