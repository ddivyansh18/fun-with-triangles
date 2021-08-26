const sides = document.querySelectorAll(".side-input")
const hypotenuseButton = document.querySelector("#button")
const output = document.querySelector("#output")




function calculateArea() {
    const area = 0.5 * Number(sides[0].value) * Number(sides[1].value);
    output.innerText = "Area of triangle is " + area + " sq. units" 
}

hypotenuseButton.addEventListener("click", calculateArea);