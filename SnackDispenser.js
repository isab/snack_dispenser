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

var snackStock = [10, 10, 10, 10, 10, 10, 10, 10];
var snackBag = [];

function dispense(){
	var idx = randomSnack();
	var item = snacks[idx];

	if(outOfStock(idx)){
		window.alert("Item is out of stock. Try again!");
	}
	else{
		var keep = prompt("Would you like to eat this yummy snack? Please answer Yes or No.");
		if(keep == "Yes" || keep == "yes"){
			snackBag.push(item);
			snackStock[idx]--;
		}
		else if(keep == "No" || keep == "no"){
			window.alert("Click repick button to choose another snack!");
		}
		else{
			window.alert("Invalid Answer!");
		}
	}
	return item;
}

function showSnack(){
	var snack = dispense();
	var snackdisplay = document.getElementById("snackdisplay");
    snackdisplay.appendChild(snack.src);
}

function randomSnack(){
	var snackIdx = Math.floor(Math.random()*7)
	return snackIdx;
}

function outOfStock(idx){
	if(snackStock[idx] == 0){
		return false;
	}
	else{
		return true;
	}
}

function show_image(item) {
    var img = document.createElement("img");
    img.src = item.src;

    document.body.appendChild(img);
}