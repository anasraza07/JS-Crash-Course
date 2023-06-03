// Step 01:
const quizSelector = document.getElementById("quiz-selector");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const answerButtonsContainer = document.getElementById("answer-buttons-container");
const resultsContainer = document.getElementById("results-container");

// Step 04:
class Quiz {
    constructor(questions) {
        this.questionsKey = Quiz.shuffleArray(questions);
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    // Step 04:
    displayQuiz() {
        answerButtonsContainer.innerHTML = "";
        const currentQuestion = this.questionsKey[this.currentQuestionIndex];
        questionContainer.textContent = ("Q" + (this.currentQuestionIndex + 1)) + ". " + currentQuestion.question;
        const answer = Quiz.shuffleArray(currentQuestion.answers);
        answer.forEach(answer => {
            const button = document.createElement("button");
            button.classList = ["answer-button"];
            button.textContent = answer;
            button.addEventListener("click", this.checkAnswer.bind(this))
            answerButtonsContainer.appendChild(button);
        })
    }

    // Step 05:
    checkAnswer(event) {
        const selectedAnswer = event.target.textContent;
        // console.log(selectedAnswer);
        const currentQuestion = this.questionsKey[this.currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            this.score++;
        }

        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questionsKey.length) {
            this.displayQuiz();
        } else {
            this.showResult();
        }
    }

    // Step 06:
    showResult() {
        quizContainer.style.display = "none";
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = `
        <h1>Quiz Result</h1>
        <p>You Scored ${this.score} out of ${this.questionsKey.length}</p>
        <button id="reload-quiz">Reload All Quiz</button>
        `;
        document.getElementById("reload-quiz").addEventListener("click", () => {
            resultsContainer.style.display = "none";
            quizSelector.style.display = "flex";
        })
    }

    //Step 07:
    static shuffleArray(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }
}


// Step 03:
const loadQuiz = (questions) => {
    const quiz = new Quiz(questions);
    quiz.displayQuiz();
    quizSelector.style.display = "none";
    quizContainer.style.display = "block";
}

// Step 02:
const loadAllQuiz = async () => {
    const response = await fetch("./quizzes.json")
    const quizzes = await response.json()
    // console.log(quizzes);

    quizzes.forEach((quiz, index) => {
        const quizCard = document.createElement("div");
        quizCard.className = ["quiz-card"];
        quizCard.textContent = "Quiz " + (index + 1);
        quizCard.addEventListener("click", () => loadQuiz(quiz));
        quizSelector.appendChild(quizCard);


    })
}

loadAllQuiz();