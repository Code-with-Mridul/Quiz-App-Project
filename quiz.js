const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

let score = 0;
//Destructring
const { correctAnswer, options, question } = questionObj;

const questionElement = document.querySelector("#question");
const optionElement = document.querySelector("#options");
const scoreElement = document.querySelector("#score");

questionElement.textContent = question;

options.forEach((opt) => {
  const btn = document.createElement("button");
  btn.textContent = opt;
  optionElement.appendChild(btn);

  btn.addEventListener("click", () => {
    if (opt === correctAnswer) {
      score++;
    } else {
      score = score - 0.25;
    }
    console.log(score);

    scoreElement.textContent = `Score: ${score}`;
    questionElement.textContent = "Quiz Completed !!";
    optionElement.textContent = "";
  });
});
