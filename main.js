$(document).ready(function(){



  //Start - Don't edit this JS
  var inscreen = 0;
  window.addEventListener("message", function(e){
    if(e.data == 'play' && inscreen == 0) {
      playFunc();
      inscreen++;
    }
    if(e.data == 'pause' && inscreen != 0) {
      pauseFunc();
      inscreen = 0;
    }
  }, false);
  //End - Don't edit this JS

  var tlhidden = new TimelineMax({delay: 0.4})
      .set('.hiddenonload',{opacity:1})

  var tl = new TimelineMax({delay: 0.4})

  ;

  //all the code to excecute in screen
  function playFunc() {
    tl.play(0);
  }

  //all the code to excecute out screen
  function pauseFunc() {
    tl.pause();
  }


});


