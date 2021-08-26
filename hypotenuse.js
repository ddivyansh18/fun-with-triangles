const sides = document.querySelectorAll(".side-input")
const hypotenuseButton = document.querySelector("#button")
const output = document.querySelector("#output")

function calculateSumOfSquares(side1, side2) {
    const sumOfSquares = side1 * side1 + side2 * side2;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

hypotenuseButton.addEventListener("click", calculateHypotenuse);