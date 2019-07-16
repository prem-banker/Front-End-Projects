var play1 = document.getElementById("p1");
var play2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var h1 = document.querySelector("h1");
var numinput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1p = 0;
var p2p = 0;
var winscore = 5;
var iswinner = false;


play1.addEventListener("click", function(){
	if ( iswinner == false){
	p1p++;
	h1.textContent = p1p + " to " + p2p;
		 if ( p1p == winscore){
			iswinner = true;
			h1.textContent = "Player1 winss boiis. " +  p1p + " to " + p2p; 
	}}
});



play2.addEventListener("click", function(){
	if (iswinner == false){
	p2p++;
	h1.textContent = p1p + " to " + p2p;
 if ( p2p == winscore){
		iswinner = true;
		h1.textContent = "Player2 winss boiis. " +  p2p + " to " + p1p;
	}
}});


reset.addEventListener("click", function(){
	iswinner = false;
	p1p =0 ;
	p2p = 0;
	h1.textContent= p1p + " to " + p2p;
});

numinput.addEventListener("change", function(){
	iswinner = false;
	p1p =0 ;
	p2p = 0;
	h1.textContent= p1p + " to " + p2p;
	winscore = numinput.value;
	winningScoreDisplay.textContent = this.value;
})