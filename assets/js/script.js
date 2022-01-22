var TimerEl = document.querySelector("#start");
var WrapperEl=document.getElementById('wrapper-div');
var QuestionsEl=document.getElementById('questions');
createSubmit=document.querySelector("#start");
var createInput=document.createElement("input");
var QuestionHl;
var Checkpoint;
var NewdivEl;
var counter = 100;
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


// Funtion to render questions
function displayQuestions (){

  if(counter!=0)
  {
    //DOM Elements 
    NewdivEl = document.createElement("div");
    WrapperEl.appendChild(NewdivEl);
    NewdivEl.className="container";
    NewdivEl.setAttribute("id", "questions");
    var QuestionHl=document.createElement("h2");
    QuestionHl.textContent=multiplechoice[questionIndex].title;
    NewdivEl.appendChild(QuestionHl);
    var MultiplechoiceEl=document.createElement("ol");
    NewdivEl.appendChild(MultiplechoiceEl);
    
    //Creating List of buttons for multiple choice
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
else{
  NewdivEl.remove();
          quizOver();

}
}

//comparing user's selected answer 
function IsItCorrect (event) {
  if(counter<=0) 
 {
  NewdivEl.remove();
   quizOver();

 }

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
    counter-=15; //penalty deduction from timer
    node=document.createTextNode("Wrong!");
    para.appendChild(node);
    NewdivEl.appendChild(para);

}

questionIndex++;

if (questionIndex === multiplechoice.length) {
    setTimeout(function() {  
        NewdivEl.remove();
        quizOver();
       }, 1500);
   
  } 
  
else { 
      
    setTimeout(function() {  NewdivEl.remove();
 displayQuestions();
}, 1500);
   
     }

}

 


//Starting Quiz 
function start(){
        
    QuestionsEl.remove();
    displayQuestions();

    intervalid=setInterval(function() {
       
      if (counter >= 0) {
        document.getElementById('countdown').innerHTML ="Time: " + counter;
      }
      if (counter < 0) {
        document.getElementById('countdown').innerHTML ="Time: " + 0;
          clearInterval(intervalid);
          NewdivEl.remove();
          quizOver();
          
          counter=-1;
      } counter--;
    }, 1000);
}

function Highscore() {
    // get value of input box
    var initials = createInput.value.toUpperCase();
  
    if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      // format new score object for current user
      var newScore = {
        score: counter,
        initials: initials
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = "score.html";
    }
  }
  
  
//End of Quiz
function quizOver()
{

  NewdivEl.remove();
    clearInterval(intervalid);

    NewdivEl = document.createElement("div");
    WrapperEl.appendChild(NewdivEl);
    NewdivEl.className="container";
    NewdivEl.setAttribute("id", "questions");
    var QuestionHl=document.createElement("h2");
    QuestionHl.textContent="All done!";
    NewdivEl.appendChild(QuestionHl);

    // show final score
  var score=counter+1;
  if(score<0) {

    score=0;
  }
  
  var finalScoreEl = document.createElement('P');
  finalScoreEl.setAttribute("class", "finalscr");
  finalScoreEl.textContent ="Your final score is " + score +".";
  NewdivEl.appendChild(finalScoreEl);



    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter initials:";

    NewdivEl.appendChild(createLabel);

    // input
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    NewdivEl.appendChild(createInput);

    // submit
    createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "submit");
    //createSubmit.className="labelinitials"
    createSubmit.textContent = "Submit";

    NewdivEl.appendChild(createSubmit);

  createSubmit.addEventListener("click",Highscore);




}






//Starting Quiz with Button click

TimerEl.addEventListener("click", start);
 
