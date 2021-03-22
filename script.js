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
        answer: "All of the Above"
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

function startGame() {
    handleTimer();
    //ask first question
    nextQuestion();
}
    
//increment through array to next question

function nextQuestion() {
    document.getElementById("question").innerHTML = q.question;
    document.getElementById("button1").innerHTML = q.choices[0];
    document.getElementById("button2").innerHTML = q.choices[1];
    document.getElementById("button3").innerHTML = q.choices[2];
    document.getElementById("button4").innerHTML = q.choices[3];
//compare user choice to answer
//Depending on answer, show "Correct", and "incorrect"
}

function handleTimer() {
    console.log ("Timer has started");
    var timer = setInterval(function() {
        if (secondsLeft > 0){
            secondsLeft--;
            document.getElementById("timer").innerHTML = "Timer: " + secondsLeft;
        }
        else {
            clearInterval(timer)
            document.getElementById("timer").innerHTML = "Timer: 0";
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
    } else {
        // answer is wrong
        document.getElementById("correct").style.visibility = "hidden";
        document.getElementById("incorrect").style.visibility ="visible";
        secondsLeft = secondsLeft -10;
    }
}

function endGame() {
    console.log ("Time is up");
}

document.getElementById("button1").addEventListener("click", checkAnswer);
document.getElementById("button2").addEventListener("click", checkAnswer);
document.getElementById("button3").addEventListener("click", checkAnswer);
document.getElementById("button4").addEventListener("click", checkAnswer);
document.getElementById("startTime").addEventListener("click", startGame);