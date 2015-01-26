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

function start(){
    i = 8;
	while(i){
   		snackStock[--i] = 2;
	}
}

function dispense(){
	var snackIdx = randomSnack();
	var snack = snacks[snackIdx];

	var snackDisplay = document.getElementsByClassName("snackdisplayclass");
    snackDisplay[0].appendChild(snack);

	if(outOfStock(snackIdx)){
		window.alert("Item is out of stock! Click dispense to try again!");
		snackDisplay[0].removeChild(snack);
	}
	else{
		var snackBag = document.getElementById("snackbag");
		snackBag.appendChild(snack);

		var confirm = prompt("Keep the snack? (Y/N)");
		if(confirm == "N"){
			snackBag.removeChild(snack);
		}
	}
	snackDisplay[0].removeChild(snack);
}

function randomSnack(){
	var snackIdx = Math.floor(Math.random()*7)
	return snackIdx;
}

function outOfStock(idx){
	if(snackStock[idx] == 0){
		return true;
	}
	else{
		return false;
	}
}