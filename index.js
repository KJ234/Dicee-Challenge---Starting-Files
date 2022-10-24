
let button = document.querySelector('.button')



function rollTheDice() {


let randomNumber1 = Math.floor(Math.random()* 6) + 1
console.log(randomNumber1)

// document.querySelector('.img1').setAttribute('Dice' + randomNumber1 + '.png')



let randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImageSource1);






let randomNumber2 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber2)


let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2);



if(randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins'
} else if(randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins'
} else  { document.querySelector("h1").innerHTML = "Draw!";
}

}

button.addEventListener('click', rollTheDice)


