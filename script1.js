igrok = {top: 0, left: 0};
bomba = {top: 0, left: 0};
bombTimer = false;
sobranoMonet = 0;
monetki = [
    {top: 0, left: 0},
    {top: 0, left: 0},
    {top: 0, left: 0}
]
kamni = [
   {top: 0, left: 0},
   {top: 0, left: 0},
   {top: 0, left: 0},
   {top: 0, left: 0},
   {top: 0, left: 0},
   {top: 0, left: 0},
   {top: 0, left: 0}
]
window.onload = startProgram;

function startProgram(){
	window.onkeydown = keyProgram;
	rasstanovkaMonet();
	rasstanovkaDrugihKamnei();
}

function keyProgram(e){
	if(e.keyCode == 38){
		movePlayer(0 , -25)
	}
	if(e.keyCode == 40){
		movePlayer(0 , 25)
	}
	if(e.keyCode == 37){
		movePlayer(-25 , 0)
	}
	if(e.keyCode == 39){
		movePlayer(25 , 0)
	}
	if(e.keyCode == 32){
		if(bombTimer == false){
			setBomb();
		}
	}
	console.log(e);
}

function movePlayer (x, y){
	igrok.top = igrok.top + y;
	igrok.left = igrok.left + x;

	if(mestoSvobodno()){
		document.getElementById('id_igrok').style.top = igrok.top;
		document.getElementById('id_igrok').style.left = igrok.left;
		vzyatMonetu();
	}
	else{
		igrok.top = igrok.top - y;
		igrok.left = igrok.left - x;
	}
}

function mestoSvobodno(){
     if(igrok.left > 450) { return false }
     if(igrok.left < 0) { return false }
     if(igrok.top > 450) { return false }
     if(igrok.top < 0) { return false }

     	for (x in kamni){
     		if(kamni[x]['top'] == igrok.top){
     			if(kamni[x]['left'] == igrok.left){
     				return false;
     		}
     	}
    };
    return true;
}