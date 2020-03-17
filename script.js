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
var initialEl = document.querySelector('#initialInput');
var listEl = document.querySelector('#answerList');
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var rightWrong = document.querySelector(`#rightOrWrong`);

document.getElementById("button1").addEventListener("click", questionScreen);
document.getElementById("answerList").addEventListener("click", answerCheck)

function answerCheck(event) {
    if (event.target.textContent === correctAns) {
        rightWrong.textContent = "Correct!!"
    }
    else {
        rightWrong.textContent = "Wrong!"
    };

}

//starting screen
//header
//instructions
//start button
//onlick 
//start time
//load question
function startScreen() {

    headingEl.textContent = "Coding Quiz";
    questionsEl.textContent = "For each of the following questions, choose the best answer from the list of choices. You will have 75 seconds to answer as many as you can. For every answer you get incorrect, you will be penalized 10 seconds. Click start when you are ready.";
    initialEl.style.visibility = "hidden";
    button1.textContent = "Continue";
    button1.style.backgroundColor = "orange";
    button2.style.visibility = "hidden";

};

function questionScreen() {
    for (var i = 0; i < questionArr.length; i++) {
        headingEl.textContent = "Question #" + (i+1) ;
        console.log(headingEl);

        questionsEl.textContent = questionArr[i].question;
        console.log(questionsEl);

        var possArr = questionArr[i].options;
        console.log(possArr);

        var correctAns = questionArr[i].answer;
        console.log(correctAns);

        

        for (var x = 0; x < possArr.length; x++) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(possArr[x]);
            node.appendChild(textnode);
            document.getElementById("answerList").appendChild(node);

        };
        questionArr.forEach(answerCheck);
    }
};



// button1.addEventListener("click", {
//     questionScreen
// })

startScreen();

//question screens
    //question
    //answers list
    //onclick
        //verify correct/incorrect answer
        //if wrong, subtract time
        //local storage

//final screen
    //score
    //text area to enter initials
    //button to submit initials
        //onclick 
            //local storage initials and score
            //go to high scores page

//high score screen
    //list high scores
    //button to start over
        //onclick
            //start quiz over
    //button to clear high scores
        //onclick
            //clear local storage
            //start quiz over
