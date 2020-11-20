
var numSquares=6;
var colors=genrateRandomColors(numSquares);
var pickedColor=pickColor();//random color picker function
var squares= document.querySelectorAll(".square");
var h1= document.querySelector("h1");
var messageDisplay= document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var rules=document.querySelector("#rules");
var body=document.querySelector("body");
var rulesmenu=document.querySelector("rulesmenu");
var hidemenu= document.querySelector("#hidemenu")
easyBtn.addEventListener("click",function(){
	//hard button class remove
	body.classList.remove("newbackground");
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	rules.classList.remove("selected");
	hidemenu.style.display="none";
	numSquares=3;
	colors=genrateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++)
	{
	squares[i].style.display="block";}
	for(var i=0 ; i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}

});
hardBtn.addEventListener("click",function(){
	//hard button class remove
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	rules.classList.remove("selected");
	body.classList.remove("newbackground");
	hidemenu.style.display="none";
	numSquares=6;
	colors=genrateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0 ; i<squares.length;i++)
	{
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});
rules.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");
	rules.classList.add("selected");
	h1.style.backgroundColor=pickedColor;
	//var x=pickColor();
	body.classList.add("newbackground");
	for(var i=0 ; i<squares.length;i++)
	{
			squares[i].style.display="none";
	}
	hidemenu.style.display="block";
})


	hidemenu.style.display="none";



for(var i=0; i<squares.length; i++){
	//add intial colors to all the squares
	squares[i].style.backgroundColor =colors[i];
	//add click listeners to all the squares
	squares[i].addEventListener("click",function(){
		//grab color to picked square
		var clickedColor=this.style.backgroundColor; 
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again ?";
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
			h1.style.backgroundColor="steelblue";
		}
	});
}
var colorDisplay= document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
function changeColors(color)
{
	for(var i=0; i<squares.length; i++)
	{
squares[i].style.backgroundColor =color;
}
}
function pickColor() {
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}
function genrateRandomColors(num) { //6
	// make an array
	var arr=[];
	//repeat num times
	for (var i=0; i<num;i++)
	{
		arr.push(randomColors());
	}
	return arr;
}
function randomColors()
{
	// pick random no from 0-255 for red
	var r=Math.floor(Math.random()*256);
	// pick random no from 0-255 for green
	var g=Math.floor(Math.random()*256);
	// pick random no from 0-255 for blue
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g +", "+ b + ")"; //rgb(255, 34, 56)
}
resetButton.addEventListener("click",function(){
	//button text change 
	resetButton.textContent="New Colors";
	//message change
	messageDisplay.textContent="";
//genrate and assign
colors=genrateRandomColors(numSquares);
//picked new color should be from array
pickedColor=pickColor();
//display on header
colorDisplay.textContent=pickedColor;
for(var i=0; i<squares.length; i++){
	//changing colors of all the squares
	squares[i].style.backgroundColor =colors[i];
	squares[i].style.display ="block";
}
	h1.style.background="steelblue";
	//bgchange
body.classList.remove("newbackground");
//hide menu
	hidemenu.style.display="none";
}
);

/*
function getBackgroundColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
*/



