var random=Math.floor((Math.random()*6)+1);
var rand_img=random+".webp";
var rand_src="Images/"+rand_img;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",rand_src)

var random1=Math.floor((Math.random()*6)+1);
var rand1_img=random1+".webp";
var rand1_src="Images/"+rand1_img;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",rand1_src)

if(random>random1){
  document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(random1>random){
  document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}
