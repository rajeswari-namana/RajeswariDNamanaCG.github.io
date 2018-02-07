var colors=["rgb(255, 0, 0)",
			"rgb(0, 0, 255)",
			"rgb(0, 255, 0)",
			"rgb(255, 255, 0)",
			"rgb(255, 0, 255)",
			"rgb(0, 255, 255)"
			]

var squares=document.querySelectorAll(".square")
var pickedColor= colors[3]
var displayColor=document.getElementById("displayColor")
displayColor.textContent=pickedColor
var message=document.getElementById("message");

for(i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){

		var clickedColor=this.style.backgroundColor;

		if(this.style.backgroundColor===pickedColor){

			message.textContent="correct";
			changeColors(clickedColor);
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent= "Try Again";
		}
	});
}

function changeColors(color){
	for(i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}

}