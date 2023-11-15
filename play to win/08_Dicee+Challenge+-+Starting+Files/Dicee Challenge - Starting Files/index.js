// script.js

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").src = randomImageSource1;

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").src = randomImageSource2;

    displayWinner(randomNumber1, randomNumber2);
}

function displayWinner(num1, num2) {
    var h1Element = document.querySelector("h1"); // Select the h1 element

    if (num1 > num2) {
        h1Element.innerHTML = "Player 1 Wins!";
    } else if (num2 > num1) {
        h1Element.innerHTML = "Player 2 Wins!";
    } else {
        h1Element.innerHTML = "It's a draw!";
    }
}

document.getElementById("shuffleButton").addEventListener("click", rollDice);
