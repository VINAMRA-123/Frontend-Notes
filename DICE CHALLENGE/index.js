var rannum1 ;
var rannum2;
var num1 = Math.floor((Math.random()*6))+1;
var num2 = Math.floor((Math.random()*6))+1;
rannum1 = "dice"+num1+".png";
rannum2 = "dice"+num2+".png";
console.log(rannum2);


document.querySelectorAll("img")[0].setAttribute("src",rannum1);
document.querySelectorAll("img")[1].setAttribute("src",rannum2);
var win ;
if (num1>num2) {
    win = "player 1 wins"
} 
else if (num2>num1) {
    win = "player 2 wins"
}
else {
    win  = "draw"    
}
document.querySelector("h1").innerHTML = win;
