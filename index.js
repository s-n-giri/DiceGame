var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src" , randomImage);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src" , randomImage2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins"
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins 	&#128681";
}

else{
    document.querySelector("h1").innerHTML = "Match &#128681 Draw";
}