"use strict";
//declare globals
var dataRequest = new XMLHttpRequest();
var gallery = document.getElementById("gallery");
var carsArray = "";
var cards = "";
var input = document.getElementById("input");

//call load and activate
CarLot.loadInventory();
CarLot.activateEvents();
