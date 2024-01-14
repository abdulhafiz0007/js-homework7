var elResult = document.querySelector(".js-result")

var firstNumber = prompt("first number")
var secondNumber = prompt("second number")
var thirdNumber = prompt("third number")

if(firstNumber > secondNumber && firstNumber < thirdNumber || firstNumber > thirdNumber && firstNumber < secondNumber) {
    elResult.textContent = firstNumber
} else if(secondNumber > firstNumber && secondNumber < thirdNumber || secondNumber > thirdNumber && secondNumber < firstNumber) {
    elResult.textContent = secondNumber
} else {
    elResult.textContent = thirdNumber
}
    




    



