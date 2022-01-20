var TimerEl = document.querySelector("#start");
var WrapperEl=document.getElementById('wrapper-div');
var QuestionsEl=document.getElementById('questions');
var QuestionHl;
var Checkpoint;
var NewdivEl;
var counter = 75;
var intervalid=0;
var questionIndex=0;
var node;
var horline;

var multiplechoice =  [
    {
        title: "Commonly used data types DO NOT include:",
        choices : ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];


function displayQuestions (){

    NewdivEl = document.createElement("div");
    WrapperEl.appendChild(NewdivEl);
    NewdivEl.className="container";
    NewdivEl.setAttribute("id", "questions");
    var QuestionHl=document.createElement("h2");
    QuestionHl.textContent=multiplechoice[questionIndex].title;
    NewdivEl.appendChild(QuestionHl);
    var MultiplechoiceEl=document.createElement("ol");
    NewdivEl.appendChild(MultiplechoiceEl);
    
    multiplechoice[questionIndex].choices.forEach(function (q) {
     var ListEl=document.createElement("li");
     MultiplechoiceEl.appendChild(ListEl);
     var MultipleChoices=document.createElement("button");
     MultipleChoices.className="buttonChoice";
     MultipleChoices.textContent=q;
     ListEl.appendChild(MultipleChoices);
     NewdivEl.addEventListener("click", (IsItCorrect));
 })


}

function IsItCorrect (event) {
var buttonChoice=event.target;
var para=document.createElement("p");
var horline=document.createElement("hr");
NewdivEl.appendChild(horline);

if (buttonChoice.textContent==multiplechoice[questionIndex].answer) {
     
node=document.createTextNode("Correct!");
para.appendChild(node);
NewdivEl.appendChild(para);

}

else {
    counter-=15;
    node=document.createTextNode("Wrong!");
    para.appendChild(node);
    NewdivEl.appendChild(para);
}
questionIndex++;

if (multiplechoice[questionIndex] === multiplechoice.length) {
   console.log("it is over")
  } else {  setTimeout(function() {  NewdivEl.remove();
 displayQuestions();
}, 1500);
   
  }

}




function start(){
        
    QuestionsEl.remove();
    displayQuestions();

    intervalid=setInterval(function() {
        console.log(intervalid);
      if (counter >= 0) {
        document.getElementById('countdown').innerHTML ="Time: " + counter;
      }
      if (counter == -1) {
        
          clearInterval(intervalid);
      } counter--;
    }, 1000);
}

TimerEl.addEventListener("click", start);