 
//http://buildnewgames.com/mobile-game-primer/
 
function setupMobileFull() {
 
 var $container = $("#container"),
      $canvas = $("#game"),
      h = window.innerHeight,
      w = window.innerWidth;

  $container.css('height',h*2);
  window.scrollTo(0,1);
	  
	h = window.innerHeight + 10;
	$container.css({ height: h, width: w, padding: 0, margin: 0});


  $game.attr({ width: w, height: h });
  $game.css({ position: 'absolute', left: 0, top: 0 });


setupMobileFull();
  
};

/*
function setupProportionalCanvas() {
   var $container = $("#container"), $canvas = $("#game"), h = window.innerHeight, w = window.innerWidth;

   $container.css('height',h*2);
   window.scrollTo(0,1);

   $canvas.attr({width: w, height: h});
   h = window.innerHeight + 2
   $container.css({ height: h, width: w, padding: 0, margin: 0});
   
    var canvasH = $canvas.attr('height'), 
       canvasW = $canvas.attr('width'),
       maxHeightMult = h / canvasH,
       maxWidthMult = w / canvasW,
       multiplier = Math.min(maxHeightMult, maxWidthMult),
       destH = canvasH * multiplier,
       destW = canvasW * multiplier;

   $canvas.css({ 
     position: 'absolute',
     height: destH, 
     width: destW,
     left: w / 2 - destW / 2,
     top: 0
   });
   
  

setupProportionalCanvas();
  
 }*/