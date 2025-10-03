var leftImage = document.querySelector(".img1");

var rightImage = document.querySelector(".img2");

var numberLeftDice = generateRandomNumber();
var numberRightDice = generateRandomNumber();

var leftPath = returnPath(numberLeftDice);

var rightPath = returnPath(numberRightDice);

leftImage.src = leftPath;
rightImage.src = rightPath;

function returnPath(randomNumber) {
    var randomImage = "dice" + randomNumber + ".png";
    return "/images/" + randomImage;
}

function generateRandomNumber() {
    var randomNumberGenerator = Math.floor(Math.random() * 6) + 1;
    return randomNumberGenerator;
}

if (numberLeftDice < numberRightDice) {
    document.querySelector("h1").innerHTML = "Hráč 2 vyhrál";
} else if (numberRightDice < numberLeftDice) {
    document.querySelector("h1").innerHTML = "Hráč 1 vyhrál";
} else {
    document.querySelector("h1").innerHTML = "Remíza";
}