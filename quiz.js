const quizForm = document.querySelector(".quiz-form")
const submitAnswerButton = document.querySelector("#btn-submit-answer")
const output = document.querySelector("#output")
const correctAnswers = ["90", "Right Angled"]

console.log("quizForm")

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        console.log(value);
        if(value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    } 
    output.innerText = "Your score is " + score;
}

submitAnswerButton.addEventListener("click", calculateScore)
