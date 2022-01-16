var TimerEl = document.querySelector("#start");
var WrapperEl=document.getElementById('wrapper-div');
var QuestionsEl=document.getElementById('questions');
var QuestionHl;

const multiplechoice =  [
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






function start(){
    QuestionsEl.remove();
  var NewdivEl = document.createElement("div");
   WrapperEl.appendChild(NewdivEl);
   NewdivEl.className="container";
   NewdivEl.setAttribute("id", "questions");
   var QuestionHl=document.createElement("h2");
   QuestionHl.textContent=multiplechoice[0].title;
   NewdivEl.appendChild(QuestionHl);

   // <ul> list

   var MultiplechoiceEl=document.createElement("ol");
   NewdivEl.appendChild(MultiplechoiceEl);
   
   multiplechoice[0].choices.forEach(function (q) {
    var ListEl=document.createElement("li");
    MultiplechoiceEl.appendChild(ListEl);
    var MultipleChoices=document.createElement("button");
    MultipleChoices.className="buttonChoice";
    MultipleChoices.textContent=q;
    ListEl.appendChild(MultipleChoices);
   })



  

   
  

   //QuestionsEl.appendChild(QuestionsTitleEl);
    var counter = 75;
    setInterval(function() {
      if (counter >= 0) {
        document.getElementById('countdown').innerHTML ="Time: " + counter;
      }
      if (counter === -1) {
        
          clearInterval(counter);
      } counter--;
    }, 1000);
}

    TimerEl.addEventListener("click", start);

    

