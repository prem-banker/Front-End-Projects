function generateRandomColors(n){
	colors = []
	for (var i =0 ; i <n ; i++){

		x = Math.floor(255*Math.random());
		y= Math.floor(255*Math.random());
		z = Math.floor(255*Math.random());

		colors[i] = "rgb(" + x + ", " + y + ", " + z + ")";	
	}
		return colors;
	
}

var bgcolor = "rgb(35, 35, 35)";
var imgs = document.querySelectorAll(".images");
var colors = generateRandomColors(6);
for (var i = 0; i < 6 ; i++){
	imgs[i].style.background=  colors[i];
}

var span = document.querySelector("span");
span.textContent = colors[Math.floor(Math.random()*6)];






for (var i =0 ; i < imgs.length; i++){
	imgs[i].addEventListener("click", function(){
			if ( this.style.background == span.textContent){
				console.log(this.style.background , span.textContent);
		for (var i = 0; i < 6 ; i++){
			imgs[i].style.background=  span.textContent;
	}
}
	else if(this.style.background != span.textContent)
	{
		console.log(this.style.background , span.textContent);
		this.style.background = bgcolor;
	}
})

}