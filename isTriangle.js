const inputs = document.querySelectorAll(".input-angle")
const isTriangleButton = document.querySelector("#btn-is-triangle")
const output = document.querySelector("#output")

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    
    if(sumOfAngles === 180) {
        output.innerText = "The angles form a triangle";
    } else {
        output.innerText = "The angles don't form a triangle";
    }
}

isTriangleButton.addEventListener("click", isTriangle);
