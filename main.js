PEXI.ready(function(){
  
    const tl = new TimelineMax({delay: 0.4, paused: true})
    .to('#stage', 0.3, {backgroundColor: '#006cff'});
    ;

    //Listen to scroll events
    PEXI.eventListener('scroll', function(data){
      console.log(data);

      //You can customize when it plays
      if(data.inViewPercentage > 30) {
        tl.play();
      }
      else {
        // tl.pause(); // You can pause or reverse the timeline
        tl.reverse();
      }

      document.querySelector('.pixels').innerHTML = data.inViewPx;
      document.querySelector('.percentage').innerHTML = data.inViewPercentage;
      document.querySelector('.direction').innerHTML = data.direction;
    })
});