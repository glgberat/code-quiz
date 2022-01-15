var TimerEl = document.querySelector("#start");








function start(){
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
