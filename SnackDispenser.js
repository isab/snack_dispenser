var snacks = new Array();
snacks[0] = new Image();
snacks[0].src = 'imgs/cheeseits.png';

snacks[1] = new Image();
snacks[1].src = 'imgs/chewybar.png';

snacks[2] = new Image();
snacks[2].src = 'imgs/goldfish.png';

snacks[3] = new Image();
snacks[3].src = 'imgs/hellopanda.png';

snacks[4] = new Image();
snacks[4].src = 'imgs/mandm.png';

snacks[5] = new Image();
snacks[5].src = 'imgs/pocky.png';

snacks[6] = new Image();
snacks[6].src = 'imgs/pretz.png';

snacks[7] = new Image();
snacks[7].src = 'imgs/pretzels.png';

var snackStock = new Array(8);
var snackBag = [];

function start(){
    i = 8;
	while(i){
   		snackStock[--i] = 2;
	}
}

function dispense(){
	var snackIdx = randomSnack();
	var snack = snacks[snackIdx];

	if(snackBag.length == 2){
		window.alert("Only TWO snacks at a time!");
	}

	else{
		var chosen = document.getElementsByClassName("snack-img");
		chosen[snackIdx].style.borderColor = "red";

		if(outOfStock(snackIdx)){
			window.alert("Item is out of stock! Click Dispense to try again!");
			chosen[snackIdx].style.borderColor = "white";
		}
		else{
			addToBag(snack);
			var ask = prompt("Keep the snack? (Y/N)");
			if(ask == "N"){
				confirm("Click Dispense for a different snack!");
				removeFromBag(snack);
				chosen[snackIdx].style.borderColor = "white";
				snackBag.pop(snack);
			}
			if(ask != "Y" && ask != "N"){
				window.alert("Invalid Answer. Dispense again.");
				removeFromBag(snack);
				chosen[snackIdx].style.borderColor = "white";
				snackBag.pop(snack);
			}
			chosen[snackIdx].style.borderColor = "white";
			snackBag.push(snack);
		}
	}
}

function randomSnack(){
	var snackIdx = Math.floor(Math.random()*7)
	return snackIdx;
}

function addToBag(snack){
	var snackBag = document.getElementById("snackbag");
	snackBag.appendChild(snack);
}

function removeFromBag(snack){
	var snackBag = document.getElementById("snackbag");
	snackBag.removeChild(snack);
}

function outOfStock(idx){
	if(snackStock[idx] == 0){
		return true;
	}
	else{
		return false;
	}
}