class Cloud
{
	constructor(xpos, a_context, a_canvas)
  {
  	this.x = xpos;
    //Max x speed is between 3 and 5 pixels excluded
    this.xspeed = Math.random() * 3 + 1;
    //Max y position is 30% of canvas height and min is 60 for non-cutoff drawing
    this.y = Math.random() * (a_canvas.height / 30) + 60;
    this.canvas = a_canvas;
    this.context = a_context;
    this.gradient = this.context.createLinearGradient(0, 0, 0, 170);
    this.stop = 1/6; 
    this.gradient.addColorStop(this.stop*6, 'red');
    this.gradient.addColorStop(this.stop*5, 'orange');
    this.gradient.addColorStop(this.stop*4, 'yellow');
    this.gradient.addColorStop(this.stop*3, 'green')
    this.gradient.addColorStop(this.stop*2, 'blue');
    this.gradient.addColorStop(this.stop*1, 'Indigo');
    this.gradient.addColorStop(this.stop*0, 'violet');
  }
  
  //Change the cloud's coordinates
  move()
  {
  	this.x += this.xspeed;
    if (this.x > this.canvas.width + 300)
    {
    	this.x = -300;
    }
  }
  
  //Draw the cloud
  show()
  {
	var startX = this.x;
	var startY = this.y;
	         context.beginPath();
                context.moveTo(startX, startY);
                context.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
                context.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
                context.bezierCurveTo(startX + 250, startY + 70, startX + 250, startY + 40, startX + 220, startY + 20);
                context.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
                context.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
                context.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
                context.closePath();
  	this.context.fillStyle = this.gradient;
	this.context.fill();
  }
}