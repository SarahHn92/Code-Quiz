//array questions

var questions = [
    {
        question: "What is an example of a string?",
        choices: ["15", "'this is a string'", "This is a string", "thisIsAString"],
        answer: "'this is a string'"
    },
    {
        question: "what element do you need to vallidate/call a function?",
        choices: ["{}", "[]", "()", "!"],
        answer: "()"
    },
    {
        question: "Commonly used data types in JavaScript do not include:",
        choices: ["mp3", "Boolean", "Strings", "Objects"],
        answer: "mp3"
    },
    {
        question: "Arrays in JavaScript can contain:",
        choices: ["Strings", "Numbers", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "The condition of an if/else statement is encolsed in:",
        choices: ["{}", "[]", "()", "//"],
        answer: "{}"
    },
]

var currentQuestion = 0;
var q =  questions[currentQuestion];
var secondsLeft = 50;
var totalQuestions = questions.length;


function startGame() {
    handleTimer();
    //ask first question
    nextQuestion();
}
  
//increment through array to next question

function nextQuestion() {
    if (q) {
        document.getElementById("question").innerHTML = q.question;
        document.getElementById("button1").innerHTML = q.choices[0];
        document.getElementById("button2").innerHTML = q.choices[1];
        document.getElementById("button3").innerHTML = q.choices[2];
        document.getElementById("button4").innerHTML = q.choices[3];  
    } 
    else { 
        endGame();
    }
    if (currentQuestion >= totalQuestions) {
        endGame();
    }
}

function handleTimer() {
    console.log ("Timer has started");
    var timer = setInterval(function() {
        if (secondsLeft > 0) {
            secondsLeft--;
            document.getElementById("timer").innerHTML = "Timer: " + secondsLeft;
        }
        else {
            clearInterval(timer)
            document.getElementById("timer").innerHTML = "Time is up!";
            endGame();
        } 
    }, 1000)  
}  

function checkAnswer(e) {
    console.log(e.target.outerText);
    var userChoice = e.target.outerText;
    if (userChoice === q.answer) {
        // answer is correct
        console.log ("true")
        currentQuestion++;
        q = questions[currentQuestion];
        document.getElementById("correct").style.visibility = "visible";
        document.getElementById("incorrect").style.visibility ="hidden";
        nextQuestion();
    } 
    else {
        // answer is wrong
        currentQuestion++;
        q = questions[currentQuestion];
        document.getElementById("correct").style.visibility = "hidden";
        document.getElementById("incorrect").style.visibility ="visible";
        secondsLeft = secondsLeft -10;
        nextQuestion();
    
    }
}



// function storeScore();


function endGame() {
    handleTimer(clearInterval());
    console.log ("Game over");
    var submit = prompt("Enter your initials to save your score!");
    console.log(submit);
    var userScore = {
        initials: submit,
        score:secondsLeft
    } 
    var highScores = [];
    highScores.push(userScore);
    console.log(highScores);


    // var storeScore = localStorage.setItem("highScores", JSON.stringify(highScores));
    // var score = JSON.parse(localStorage.getItem(highScores));

    function insertHtml() {
        document.getElementById("highscores").innerHTML = "Player: " + userScore.initials + " Score:" + userScore.score;
    }

    insertHtml();
}



document.getElementById("button1").addEventListener("click", checkAnswer);
document.getElementById("button2").addEventListener("click", checkAnswer);
document.getElementById("button3").addEventListener("click", checkAnswer);
document.getElementById("button4").addEventListener("click", checkAnswer);
document.getElementById("startTime").addEventListener("click", startGame);
document.getElementById("correct").style.visibility = "hidden";
document.getElementById("incorrect").style.visibility = "hidden";




