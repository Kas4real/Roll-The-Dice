var button = document.querySelector('button');

button.addEventListener("click", rollDice);

function rollDice() {

    var randomNumber1 = Math.floor((Math.random() * 6) + 1);

    var randomDiceImage = "images/dice" + randomNumber1 + ".png";

    var image1 = document.querySelectorAll('img')[0];

    image1.setAttribute("src", randomDiceImage);

    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    var image2 = document.querySelectorAll('img')[1];

    image2.setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = "🚩 Play 1 Wins!";
        document.querySelector('h1').style.fontSize = "5rem";
    } 
    else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerHTML = "Player 2 Wins! 🚩";
        document.querySelector('h1').style.fontSize = "5rem";
    }
    else {
        document.querySelector('h1').innerHTML = "Draw!";
    }

}






















// var firstRandomNumber = Math.random() * 6;
// var randomNumber1 = Math.floor(firstRandomNumber);
// var imageArray = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
// var setDice1 = imageArray[randomNumber1];

// var secondRandomNumber = Math.random() * 6;
// var randomNumber2 = Math.floor(secondRandomNumber);
// var imageArray2 = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
// var setDice2 = imageArray2[randomNumber2];

// document.querySelector('.img1').setAttribute("src", setDice1);
// document.querySelector('.img2').setAttribute("src", setDice2);

// if (setDice1 > setDice2) {
//     document.querySelector('h1').innerHTML = "🚩 Player 1 Wins!";
//      document.querySelector('h1').style.fontSize = "5rem";
// }else  if (setDice1 < setDice2) {
//     document.querySelector('h1').innerHTML = "Player 2 Wins! 🚩";
//     document.querySelector('h1').style.fontSize = "5rem";
// }else {
//     document.querySelector('h1').innerHTML = "Draw!";
// }