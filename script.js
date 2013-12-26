
// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/
//var canvas = document.getElementById("myCanvas");

//var context = canvas.getContext("2d");
var  canvas, context, toggle;
var y= 220;
var x= 284;

var y2=-10;
var x2= 10;

var y3=-10;
var x3= 400;

var mid = 128;
var dirX = 1;
var dirY = 1;
var destX  ;
var destY ;
var i;
var state ;
var inbounds='true';
var status = -1; // -1: stopped  , 0 In play	

var imageObj = new Image();	
var imageObj2 = new Image();
var imageObj3 = new Image();	
var background_obj= new Image();


background_obj.src = "deep-space.jpg";
imageObj.src = "spshipsprite.png";
imageObj2.src = "spacestation.png";
imageObj3.src = "blueship4.png";
var jump = 'rest';
var backg_x = 0;
var backg_y = 0;
var floating =false;
var degrees = 0;
var str;
var name;
//init();
var dir = 1;
var monster = {};
var origin = {};


// Bullet image
var bulletReady = false;
var bulletImage = new Image();
bulletImage.onload = function () {
	//bulletReady = true;
};
bulletImage.src = "images/bullet.png";

var bullet = {
	speed: 256 // movement in pixels per second
};


var hasTouch = !!('ontouchstart' in window);



//function init() {

    canvas = document.createElement('canvas');
    canvas.id = 'game';
    canvas.width = 568;
    canvas.height = 400;
    context = canvas.getContext( '2d' );
    //context.font = "40pt Calibri";
    //context.fillStyle = "white";
	// align text horizontally center
	context.textAlign = "center";
	// align text vertically center
	context.textBaseline = "middle";	
	//context.font = "12pt Calibri"; 
	
	//canvas.width = 8248;
	context.drawImage(background_obj, backg_x, backg_y);
 	//imageData = context.getImageData(0,0,8248,400); //fnord
 	 	    
    //var x = document;
   // canvas.width = 568;

   $( "#container" ).append( canvas );
//}
animate();

// shoot addition
var shoot = function(modifier){

    if (dir==1){

        bullet.y -= bullet.speed * modifier * 4;
    }

    if (dir==2){

        bullet.y += bullet.speed * modifier * 4;
    }

    if (dir==3){

        bullet.x -= bullet.speed * modifier * 4;
    }

    if (dir==4){

        bullet.x += bullet.speed * modifier * 4;

    }
 
    	// Are they touching2?
	if (
		bullet.x <= (monster.x + 32)
		&& monster.x <= (bullet.x + 32)
		&& hero.y <= (bullet.y + 32)
		&& monster.y <= (bullet.y + 32)
	) {
		++monstersShot;
		reset();
	}
   
   //distance = square root sqrt  of ( (x2-x1)^2 + (y2-y1)^2)
   
    var distance = Math.sqrt(    Math.pow(bullet.x-origin.x, 2) + Math.pow(bullet.y - origin.y,2) );
   
    if (distance > 200)
    {
        bulletReady = false;
        first = true
    }
}
   if (bulletReady) {
	        context.drawImage(bulletImage, bullet.x, bullet.y);
	    }


// shoot addition
function shoot()
{

    if (dir==1){

        bullet.y -= bullet.speed  * 4;
    }

    if (dir==2){

        bullet.y += bullet.speed  * 4;
    }

    if (dir==3){

        bullet.x -= bullet.speed  * 4;
    }

    if (dir==4){

        bullet.x += bullet.speed  * 4;

    }
 
  
   //distance = square root sqrt  of ( (x2-x1)^2 + (y2-y1)^2)
   
    var distance = Math.sqrt(    Math.pow(bullet.x - x, 2) + Math.pow(bullet.y - y,2) );
   
    if (distance > 200)
    {
        bulletReady = false;
        first = true
    }
}

function animate() {

    update();
    requestAnimFrame( animate );
    shoot();
    draw();
}

function update() {

     y2++;
     x2++;
     y3++;
     x3--;     
 
     if (y2==400)
    {
        y2=0;
    }

 if (x2==598)
    {
        x2=0;
    }


    if (y3==400)
    {
        y3=0;
    }

 if (x3==0)
    {
        x3=598;
    }
}

function draw() {

    context.fillText( state + ":" , canvas.width / 2 , canvas.height / 2 );

	$(document).keyup(function(e)
	{
		if (e.keyCode == 37)
		{
			state= "stop";
			dirX=1;
			 dir=3;	
		}
		if (e.keyCode == 39)
		{
			state= "stop";
			dirX=1;
			 dir=4;	
		}
		if (e.keyCode == 38)
		{
			jump = 'descend';
		}
});
	$(document).keydown(function(e) {
	//alert (e.keyCode);
	//if space start/stop gameloop
	//var time = new Date().getTime() * 0.002;
	
	
		if(e.keyCode == 32)
		{
			status = 0 - status;
			bulletReady = true;
		    bullet.x = x;
            bullet.y = y;
		}
	//	if (jump != 'descend')
	//	{
			if (e.keyCode == 38 )
			{
				jump = 'ascend';
			}
	//	}
		if (e.keyCode == 40){
		//	down
		}
		if (e.keyCode == 37){
			state = 'left';
		}
		if (e.keyCode == 39){
			state = 'right';
		}
	});
		///////////////////////////////////////////////////////////////////////////////
	   if (state == 'left')
	   {
	   		//x = x-(1 * dirX);
	   	//	backg_x = backg_x + 1 ;
	   		degrees = degrees - 1;
	   //		context.setTransform(1,0.5,-0.5,10,10);
	   }
		if (state == 'right')
		{
  		//x		= x + (1 * dirX);
	  	//	backg_x = backg_x - 1 ;
	  		degrees = degrees +1 ;
	  	//	context.setTransform(1,0.5,-0.5,1,10,10);
	  		
		}
		if (jump == 'ascend')
		{

		}
		if (jump == 'descend')
		{
			y = y - 1;
			if (y == 0)
			{
				jump = 'rest';
			}
		}
		if (jump == 'rest')
		{
			y = 0;
			dirY = -1;
		}
		if (inbounds=='true')
		{
		//	destX = (canvas.width / 2 ) + x;
		//	destY = canvas.height  - 30 - y			;// 60 pixels offset from centre
		}//end if inbounds
		if (destX > canvas.width || destX < 0)
		{
   		//	dirX =-dirX;
    	}
		if (destY > canvas.width || destY < 0)
		{
  			//	dirY =-dirY;
		}
		//canvas.width = 8248;
		context.clearRect(0,0 , canvas.width, canvas.height);
	 
		context.drawImage(background_obj, backg_x, backg_y);

		context.save();
 
        context.beginPath();
	 	context.translate( 290,210 );
        // rotate the rect
        context.rotate(degrees*Math.PI/180);
		context.drawImage(imageObj, -37, -50);
		
		context.restore();

		context.drawImage(imageObj2, x2, y2);
		
		context.drawImage(imageObj3, x3, y3);
		
		//str = "width=" + imageData.width + " height=" +	imageData.height 
		//+ " red :" + red  + " green :" + green + " blue :" + blue  
		//+ " destX :" + parseInt(0-backg_x)  + " destY :" +destY 
		//+ " inbounds:" + inbounds  
		//+ " float: " + floating + " jump : " + jump;
		
		//context.fillText(str, 20, 14);
		
		//str2 = "x: " + x + "y :" + y;
		//context.fillText(str2, 20, 34);

		context.fillStyle = 'white';

		
	}
	
	
	
	
		
		
		
		
		
		function goLeft(){
			   		degrees = degrees - 1;
			}
			
		
		function goRight(){
			   		degrees = degrees + 1;
			}

	
		//$( "#float_left" ).click(function() {
		//	//alert( "left" );
		//	goLeft();
		//});
	
		//$( "#float_right" ).click(function() {
			//alert( "right" );
		//	goRight();
		//});
	
		
	
		
		
		

if (hasTouch)
{		
		
//alert( "touch" );
		//$( "#float_left" ).on('touchstart', function () {
			//alert( "left" );
		//	goLeft();
		//});
		
		
		
		
var currentElement = null;
$("#float_left").on('touchstart',function(e) {
  currentElement = this;
  $(this).addClass('hover');
  e.preventDefault();
});
	
var currentElement = null;
$("#float_right").on('touchstart',function(e) {
  currentElement = this;
  $(this).addClass('hover');
  e.preventDefault();
});

$("#float_left").on('touchmove',function(e) {
  var evt = e.originalEvent;
  var element = document.elementFromPoint(evt.changedTouches[0].clientX, evt.changedTouches[0].clientY);
  if(element != currentElement) {
    $(this).removeClass('hover');
    currentElement = null;
  }
  e.preventDefault();
});

$("#float_right").on('touchmove',function(e) {
  var evt = e.originalEvent;
  var element = document.elementFromPoint(evt.changedTouches[0].clientX, evt.changedTouches[0].clientY);
  if(element != currentElement) {
    $(this).removeClass('hover');
    currentElement = null;
  }
  e.preventDefault();
});

$("#float_left").on('touchend',function(e) {
  var evt = e.originalEvent;
  $(this).removeClass('hover');
  var element = document.elementFromPoint(evt.changedTouches[0].clientX, evt.changedTouches[0].clientY);
  if(element == currentElement) {
    $(this).text('Touched');
	goLeft();
  }
  currentElement = null;
  e.preventDefault();
});		


$("#float_right").on('touchend',function(e) {
  var evt = e.originalEvent;
  $(this).removeClass('hover');
  var element = document.elementFromPoint(evt.changedTouches[0].clientX, evt.changedTouches[0].clientY);
  if(element == currentElement) {
    $(this).text('Touched');
	goRight();
  }
  currentElement = null;
  e.preventDefault();
});		
		
		
		
		
		
		
		
		
		
		



}		
	
	
	
	
	
