
var timerEl = document.getElementById('timer');
var start = document.getElementById('startButton');
var personalbestDisplay = document.getElementById('highscore');


// Questions and Answers Array
var quizQuestions = [
            {
                question: "What is the correct way to declare a variable in JavaScript??",
                answers: [
                    { text: "var myVariable = 'Hello';", correct: true },
                    { text: "myVariable = 'Hello';", correct: false },
                    { text: "variable myVariable = 'Hello';", correct: false },
                ]
            },
            {
                question: "What is the difference between == and === in JavaScript?",
                answers: [
                    { text: "They are the same and can be used interchangeably.", correct: false },
                    { text: "== compares values without considering data types, while === compares both values and data types.", correct: true },
                    { text: "=== compares values without considering data types, while == compares both values and data types.", correct: false },
                ]
            },
            {
                question: "Which of the following is NOT a JavaScript data type?",
                answers: [
                    { text: "string", correct: false },
                    { text: "boolean", correct: false },
                    { text: "integer", correct: true },
                ]
            },
            {
                question: "Which keyword is used to define a function in JavaScript?",
                answers: [
                    { text: "func", correct: false },
                    { text: "fefine", correct: false },
                    { text: "function", correct: true },
                ]
            },
            {
                question: "What is the output of the following code snippet?\nvar myArray = [1, 2, 3, 4]; \nconsole.log(myArray.length);",
                answers: [
                    { text: "1", correct: false },
                    { text: "2", correct: false },
                    { text: "3", correct: false },
                    { text: "4", correct: true },
                ]
            },
        ];



    function startQuiz() {
        var quizContainer = document.getElementById('quizContainer');
            quizContainer.innerHTML = "";

        var questionContainer = document.createElement('div');
            questionContainer.innerText = quizQuestions[0].question;
            quizContainer.appendChild(questionContainer);

        var answersContainer = document.createElement('div');
            quizQuestions[0].answers.forEach(answer => {
                var answerButton = document.createElement('button');
                answerButton.innerText = answer.text;
                answerButton.addEventListener('click', () => {
                    if (answer.correct) {
                        alert("Correct!");
                    } else {
                        alert("Wrong answer.");
                    }
                    // show the next quiz question
                    showNextQuestion();
                });
                answersContainer.appendChild(answerButton);
            });
            quizContainer.appendChild(answersContainer);

            // 30 second timer
            function countdown() {
                var timeLeft = 30;
                timerEl.textContent = timeLeft + ' seconds remaining';
            
                var timeInterval = setInterval(function () {
            
                if (timeLeft > 1) {
                    timerEl.textContent = timeLeft + ' seconds remaining';
                    timeLeft--;
                } else if (timeLeft === 1) {
                    timerEl.textContent = timeLeft + ' second remaining';
                    timeLeft--;
                } else { 
                    timerEl.textContent = '';
                    clearInterval(timeInterval);
                    displayMessage();
                }
                
                },1000 );
            }

            countdown();
        }

    var currentQuestionIndex = 0;

        function showNextQuestion() {
            currentQuestionIndex++;

            if (currentQuestionIndex < quizQuestions.length) {
                var quizContainer = document.getElementById('quizContainer');
                quizContainer.innerHTML = "";

                var questionContainer = document.createElement('div');
                questionContainer.innerText = quizQuestions[currentQuestionIndex].question;
                quizContainer.appendChild(questionContainer);

                var answersContainer = document.createElement('div');
                quizQuestions[currentQuestionIndex].answers.forEach(answer => {
                    var answerButton = document.createElement('button');
                    answerButton.innerText = answer.text;
                    answerButton.addEventListener('click', () => {
                        if (answer.correct) {
                            alert("Correct!");
                        } else {
                            alert("Wrong answer.");
                        }
                        // show the next quiz question
                        showNextQuestion();
                    });
                    answersContainer.appendChild(answerButton);
                });
                quizContainer.appendChild(answersContainer);
            } else {
                alert("Quiz finished");
            }
        }


// Highscore display
personalbestDisplay.textContent = 'bread';

    /*function personalbestUpdate () {
        var personalBest = ;
        
    }*/


// Start button, needs to start time and game
start.addEventListener('click', startQuiz);
