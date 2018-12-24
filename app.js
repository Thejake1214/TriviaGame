$("#startGame").on("click", function() {
    $("#startGame").hide();
    clock();
    generateHTML();

});

$("body").on("click", ".answer", function() {

    event.preventDefault();
    selectedAnswer = $(this).text();
    if (selectedAnswer === correctArray[counter]) {
        clearInterval(time);
        correctAnswer();
    } else {
        clearInterval(time);
        incorrectAnswer();
    }
});

$("body").on("click", ".reset-button", function() {
    var time = 0;
    var timerCount = 30;
    var counter = 0;
    var correctNum = 0;
    var incorrectNum = 0;
    var unansweredNum = 0; 
    resetGame();
});

function clock() {
    time = setInterval(thirty, 1000);

    function thirty() {
        if (timerCounter === 0) {
            clearInterval(time);
            questionTimeout();
        }
        if (timerCounter > 0) {
            timerCounter--;
        }
        $(".timer").html(timerCounter);
    }
}

function generateHTML() {
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" + timerCounter + "</span></h2><h3 class='text-center'>" + questionsArray[counter] + "</h3><h3 class='answer'>A. " + answersArray[counter][0] + "</h3><h3 class='answer'>B. " + answersArray[counter][1] + "</h3><h3 class='answer'>C. " + answersArray[counter][2] + "</h3><h3 class='answer'>D. " + answersArray[counter][3] + "</h3>";
    $(".gameDiv").html(gameHTML);
};

function questionTimeout() {
    notAnsweredNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" + timerCounter + "</span></h2><h3 class='text-center'>You're out of time</h3>" + "<h3>The correct answer is: " + correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2500);
}

function correctAnswer() {
    correctNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" + timerCounter + "</span></h2><h3 class='text-center'>Correct " + correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2500);
}

function incorrectAnswer() {
    incorrectNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" + timerCounter + "</span></h2><h3 class='text-center'>Incorrect. The correct answer is: " + correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2500);
}

function gameEnd() {
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" + timerCounter + "</span></h2><h3 class='text-center'>Here is your results.</h3>" + "<h3 class='summary-correct'>Correct Answers: " + correctNum + "</h3><h3>Wrong Answers: " + incorrectNum + "</h3><h3>Unanswered: " + notAnsweredNum + "</h3>" + "<h3 class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></h3>";
    $(".gameDiv").html(gameHTML);;
}



function resetGame() {
    generateHTML();
    clock();
}

function wait() {
    if (counter < 1) {
        counter++;
        generateHTML();
        timerCounter = 30;
        clock();
    } else {
        gameEnd();
    }
}

var questionsArray = [
    "Who was the actor who played Tony Montana?",
    "Say hello to my ____________."
];
var answersArray = [
    ["Al Pacino", "Robert Loggia", "Steven Bauer", "Paul Shenar"],
    ["Girlfriend", "Little friend", "Mom", "Hamster"]
];
var correctArray = [
    "A. Al Pacino",
    "B. Little friend"
];
var timerCounter = 30;
var counter = 0;
var time = 0;
var correctNum = 0;
var incorrectNum = 0;
var notAnsweredNum = 0;


