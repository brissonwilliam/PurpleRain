//William Brisson
//May 22nd 2017

// Purple Rain
// (138, 43, 226) or #8A2BE2
// (230, 230, 250) or #E6E6FA


//Get the drawing zone
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");
context.canvas.width  = window.screen.availWidth;
context.canvas.height = window.screen.availHeight;

//Setting up raindrops, cloud and Timer
var drops = []
for (i=0; i<300; i++)
{
   drops.push(new Drop(context, a_canvas));
}

var clouds = [];
var xpos = 0;
for(i=0; i<80; i++)
{
   clouds.push(new Cloud(xpos, context, a_canvas));
   xpos += 200;
}

var timer = setInterval(tick, 10);

//Set lightning strike
//Max time is 10secs, min is 2secs
var lightning_time = Math.random() * 10000 + 2000;
var lightning_timer = setTimeout(LightningStrike, lightning_time);
var drawlight = false; 
var drawlight_off_timer = setInterval(drawlight_off, 1750);


//Draw all raindrops on timer tick
function tick()
{

    //Set background
    context.fillStyle = "#E6E6FA";
    context.fillRect(0, 0, a_canvas.width, a_canvas.height); 

    //draw each drop
    for (i=0; i<drops.length; i++)
    {
	drops[i].fall();
	drops[i].show();
    }

    //draw each cloud
    for(i=0; i<clouds.length; i++)
    {
       clouds[i].move();
       clouds[i].show();
    }

    if(drawlight)
    {
       DrawLightning();
    }
}

//It's time to do a lightning strike!!! Called by timer with random intervals
function LightningStrike()
{
    drawlight = true;

    //Reset timer
    lightning_time = Math.random() * 10000 + 2000;
    lightning_timer = setTimeout(LightningStrike, lightning_time);
}

function drawlight_off()
{
    drawlight = false;
}

function DrawLightning()
{
    context.strokeStyle = "#2cb7b5";
    context.lineWidth = Math.random() * 14 + 3;
    context.beginPath();
    
    //Starting point
    var x = Math.random() * a_canvas.width;
    context.moveTo(x, 160);

    //Splitting the lightning
    var x2 = x + (Math.random() * 60 + 10);
    var y2 = 160 + (Math.random() * 500 + 20);
    context.lineTo(x2, y2);
    context.moveTo(x2, y2);

    var x3 = x2 - (Math.random() * 100 + 10);
    var y3 = y2 + (Math.random() * 200 + 20);
    context.lineTo(x3, y3)
    context.moveTo(x3, y3);

    var x4 = x3 + (Math.random() * 300 + 10);
    context.lineTo(x4, a_canvas.height);
    context.closePath();
    context.stroke();

}
