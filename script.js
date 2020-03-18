//questions array(s)
//answers array(s)
//link questions to correct answers
var questionArr = [
    { question: "What is the HTML tag under which one can write the JavaScript code?", options: ["<javascript>", "<scripted>", "<script>", "<js>"], answer: "<script>" },
    { question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?", options: ["alertbox(“GeeksforGeeks”);", "msg(“GeeksforGeeks”);", "msgbox(“GeeksforGeeks”);", "alert(“GeeksforGeeks”);"], answer: "alert(“GeeksforGeeks”);" },
    { question: "What is the correct syntax for referring to an external script called “geek.js”?", options: ["<script src=”geek.js”>", "<script src=”geek.js”>", "<script ref=”geek.js”>", "<script name=”geek.js”>"], answer: "<script src=”geek.js”>" },
    { question: "The external JavaScript file must contain <script> tag. True or False?", options: ["True", "False"], answer: "False" },
    { question: "Which of the following is not a reserved word in JavaScript?", options: ["interface", "throws", "program", "short"], answer: "program" },
    { question: "What is the syntax for creating a function in JavaScript named as Geekfunc?", options: ["function = Geekfunc()", "function Geekfunc()", "function := Geekfunc()", "function : Geekfunc()"], answer: "function Geekfunc()" },
    { question: "How is the function called in JavaScript?", options: ["call Geekfunc();", "call function GeekFunc();", "Geekfunc();", "function Geekfunc();"], answer: "Geekfunc();" },
    { question: "How to write an ‘if’ statement for executing some code. If “i” is NOT equal to 8?", options: ["if(i<>5)", "if i<>5", "if(i!=5)", "if i!=5"], answer: "if(i!=5)" },
    { question: "What is the correct syntax for adding comments in JavaScript?", options: ["<!–This is a comment–&gt", "//This is a comment", "–This is a comment", "**This is a comment**"], answer: "//This is a comment" },
    { question: "What is the JavaScript syntax for printing values in Console?", options: ["print(5)", "console.log(5);", "console.print(5);", "print.console(5);"], answer: "console.log(5);" },
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
    // function startTimer(duration, display) {
    //     var timer = duration, minutes, seconds;
    //     setInterval(function () {
    //         minutes = parseInt(timer / 60, 10);
    //         seconds = parseInt(timer % 60, 10);

    //         minutes = minutes < 10 ? "0" + minutes : minutes;
    //         seconds = seconds < 10 ? "0" + seconds : seconds;

    //         display.textContent = minutes + ":" + seconds;

    //         if (--timer < 0) {
    //             timer = duration;
    //         }
    //     }, 1000);
    // }

    // button1.onclick = function () {
    //     var fiveMinutes = 60 * 5,
    //         display = document.querySelector('#time');
    //     startTimer(fiveMinutes, display);
    // };
    questionScreen();

});

document.getElementById("button3").addEventListener("click", function () {
    localStorage.clear();
    scoreTable.innerHTML = "";
});


document.getElementById("button4").addEventListener("click", function () {
    questionCounter = 0;
    correctAnsCounter = 0;
    startScreen();
});

document.getElementById("answerList").addEventListener("click", function () {
    rightWrongEl.style.visibility = "visible";
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
    scoreTable.innerHTML = ""

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

        headingEl.textContent = "Question #" + (questionCounter + 1);
        console.log(headingEl);

        questionsEl.textContent = questionArr[questionCounter].question;
        console.log(questionsEl);

        possArr = questionArr[questionCounter].options;
        console.log(possArr);

        correctAns = questionArr[questionCounter].answer;
        console.log(correctAns);

        listEl.textContent = "";

        rightWrongEl.style.visibility = "visible";

        for (var i = 0; i < possArr.length; i++) {
            var node = document.createElement("LI");
            var node1 = document.createElement("BUTTON")
            var textnode = document.createTextNode(possArr[i]);
            node1.appendChild(textnode);
            node.appendChild(node1);
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
        var node2 = document.createElement("TD");
        var textnode1 = document.createTextNode(localStorage.key(i));
        var textnode2 = document.createTextNode(localStorage.getItem(localStorage.key(i)));
        node1.appendChild(textnode1);
        node2.appendChild(textnode2);
        node.appendChild(node1);
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
