const quizSelector = document.getElementById("quiz-selector");
const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results-container");
const questionContainer = document.getElementById("question-container");
const answerButtonsContainer = document.getElementById("answer-buttons-container");

class Quiz {
    constructor(questions) {
        this.questions = Quiz.shuffleArray(questions);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.displayQuestion();
    }

    displayQuestion() {
        answerButtonsContainer.innerHTML = "";
        const currentQuestion = this.questions[this.currentQuestionIndex]
        // console.log(currentQuestion);
        questionContainer.textContent = currentQuestion.question;
        const answers = Quiz.shuffleArray(currentQuestion.answers);
        answers.forEach(answer => {
            const button = document.createElement("button");
            button.classList = ["answer-button"];
            button.textContent = answer;
            button.addEventListener("click", this.checkAnswer.bind(this)); // addEventListener mmain koi method call hone ke baad us main usko this nhi milta (scope change hone ki wajaa se)that's why .bind(this) use krte hain
            answerButtonsContainer.appendChild(button)
        })
    }

    checkAnswer(event) { // event is a default parameter given by addEventListener has many imp things in it.
        const selectedAnswer = event.target.textContent; // event.target means jis element pe click huaa hai ab .textContent lagaa ke uska phr text le aayega.

        const currentQuestion = this.questions[this.currentQuestionIndex] // again initialize same variable with same value bcuz not find in this function bcuz of scope.

        if (selectedAnswer === currentQuestion.correctAnswer) {
            this.score++;
        }

        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.showResult();
        }
    }

    showResult() {
        quizContainer.style.display = "none";
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = `
        <h2>Quiz Result<h2>
        <p>You Scored ${this.score} out of ${this.questions.length} questions</p>
        <button id="reload-quiz">Reload All quiz</button>
        `;

        document.getElementById("reload-quiz").addEventListener("click", () => {
            // quizContainer.style.display = "none";
            resultsContainer.style.display = "none";
            quizSelector.style.display = "flex";
        })
    }

    static shuffleArray(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }
}
// displayQuestion();

const loadQuiz = (questions) => {
    const quiz = new Quiz(questions)
    // quiz.displayQuestion(); // isko ooper direct constructor ke andr bhi call karwaa skte hain
    quizContainer.style.display = "block";
    quizSelector.style.display = "none";
}

const loadAllQuiz = async () => {
    const response = await fetch("./quizzes.json")
    const quizzes = await response.json()

    quizzes.forEach((quiz, index) => {
        const quizCard = document.createElement("div");
        quizCard.classList = ["quiz-card"];
        quizCard.innerText = "Quiz " + (index + 1);
        quizCard.addEventListener("click", () => loadQuiz(quiz));
        quizSelector.appendChild(quizCard)
    })
}

loadAllQuiz();