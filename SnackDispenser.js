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
   		arr[--i] = 10;
	}
}

function reset(){
	document.getElementById("snackdisplay").style.display= "none";
}

function dispense(){
	var snackIdx = randomSnack();
	var snack = snack[snackIdx];
	var snackdisplay = document.getElementById("snackdisplay");
    snackdisplay.appendChild(snack.src);

	if(outOfStock(snackIdx)){
		window.alert("Item is out of stock! Click reset then dispense to try again!");
	}
	else{
		var keep = prompt("Would you like to eat this yummy snack? Please answer Yes or No.");
		if(keep == "Yes" || keep == "yes"){
			snackBag.push(item);
			snackStock[idx]--;
		}
		else if(keep == "No" || keep == "no"){
			confirm("Want a different snack? Click reset then despense to try again!");
		}
		else{
			window.alert("Invalid Answer!");
		}
	}
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