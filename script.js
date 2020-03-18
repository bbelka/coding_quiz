//questions array(s)
//answers array(s)
//link questions to correct answers
var questionArr = [
    { question: "question1...?", options: ["answer1.1", "answer1.2", "answer1.3"], answer: "answer1.1" },
    { question: "question2...?", options: ["answer2.1", "answer2.2", "answer2.3"], answer: "answer2.2" },
];
var answerArr = [""];
var headingEl = document.querySelector('#heading');
var questionsEl = document.querySelector('#question');
var initialText = document.querySelector('#initialInput-text');
var initialForm = document.querySelector('#initialInput-form')
// var initialDiv = document.querySelector
var listEl = document.querySelector('#answerList');
var rightWrongEl = document.querySelector(`#rightOrWrong`);
var scoreTable = document.querySelector('#scoreTable');
var tableDiv = document.querySelector("#table");
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var button4 = document.querySelector('#button4');
var questionCounter = 0;
var correctAnsCounter = 0;


document.getElementById("button1").addEventListener("click", function () {
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
    button1.onclick = function () {
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    };
    questionScreen();
    
});
   
document.getElementById("button3").addEventListener("click", function () {
    localStorage.clear();

});
document.getElementById("button4").addEventListener("click", function () {
    questionCounter = 0;
    correctAnsCounter = 0;
    startScreen();
});

document.getElementById("answerList").addEventListener("click", function () {
    if (event.target.textContent === correctAns) {
        rightWrongEl.id = "response";
        rightWrongEl.textContent = "Correct!!";
        correctAnsCounter = correctAnsCounter + 1;
    }
    else {
        rightWrongEl.textContent = "Wrong!"
    };
    questionCounter = questionCounter + 1;
    console.log(questionCounter);
    questionScreen();
});

document.getElementById("button2").addEventListener("click", function () {
    var initials = initialText.value;
    localStorage.setItem(initials, correctAnsCounter);
    highScoreScreen();
});
// todoForm.addEventListener("submit", addTodo);

function clear() {
    headingEl.textContent = "";
    questionsEl.textContent = "";
    listEl.textContent = "";
    rightWrongEl.textContent = "";
    initialForm.style.display = "none";
    initialText.style.display = "none";
    tableDiv.style.display = "none";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
    button4.style.visibility = "hidden";

}

//starting screen
//header
//instructions
//start button
//onlick 
//start time
//load question
function startScreen() {
    clear();
    button1.style.visibility = "visible";
    headingEl.textContent = "Coding Quiz";
    questionsEl.textContent = "For each of the following questions, choose the best answer from the list of choices. You will have 75 seconds to answer as many as you can. For every answer you get incorrect, you will be penalized 10 seconds. Click start when you are ready.";
    button1.textContent = "Continue";
    button1.style.backgroundColor = "orange";
    button2.style.visibility = "hidden";

};

//question screens
//question
//answers list
//onclick
//verify correct/incorrect answer
//if wrong, subtract time
function questionScreen() {

    if (questionCounter < questionArr.length) {
        clear();
        button1.style.visibility = "visible";

        headingEl.textContent = "Question #" + (questionCounter + 1);
        console.log(headingEl);

        questionsEl.textContent = questionArr[questionCounter].question;
        console.log(questionsEl);

        possArr = questionArr[questionCounter].options;
        console.log(possArr);

        correctAns = questionArr[questionCounter].answer;
        console.log(correctAns);

        listEl.textContent = "";

        for (var i = 0; i < possArr.length; i++) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(possArr[i]);
            node.appendChild(textnode);
            document.getElementById("answerList").appendChild(node);
        };
    }
    else {
        scoreSubmitScreen();
    }

};

startScreen();
// highScoreScreen();
// scoreSubmitScreen();


//final screen
//score
//text area to enter initials
//button to submit initials
//local storage
//onclick 
//local storage initials and score
//go to high scores page

function scoreSubmitScreen() {
    clear();
    headingEl.textContent = "Your score is: " + correctAnsCounter;
    questionsEl.textContent = "Enter your initials";
    initialForm.style.display = "inherit";
    initialText.style.display = "inherit";
    button2.style.visibility = "visible";
    button2.textContent = "submit";

}
//high score screen
//list high scores
//button to start over
//onclick
//start quiz over
function highScoreScreen() {
    clear();

    for (var i = 0; i < localStorage.length; i++) {
        var node = document.createElement("TR");
        var node1 = document.createElement("TD");
        var textnode1 = document.createTextNode(localStorage.key(i));
        node1.appendChild(textnode1);
        node.appendChild(node1);

        var node2 = document.createElement("TD");
        var textnode2 = document.createTextNode(localStorage.getItem(localStorage.key(i)));
        node2.appendChild(textnode2);
        node.appendChild(node2);
        document.getElementById("scoreTable").appendChild(node);
    };
    button3.style.visibility = "visible";
    button4.style.visibility = "visible";
    button3.textContent = "clear high scores";
    button4.textContent = "start over";
    tableDiv.style.display = "inherit";
};

    //button to clear high scores
        //onclick
            //clear local storage
            //start quiz over
