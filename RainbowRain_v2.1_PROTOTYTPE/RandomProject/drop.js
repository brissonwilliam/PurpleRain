// Purple Rain
// (138, 43, 226) or #8A2BE2
// (230, 230, 250) or #E6E6FA

class Drop
{
    constructor(a_context, a_canvas)
    {  
	this.context = a_context;
	this.canvas = a_canvas;
        this.x = Math.random() * a_canvas.width;     //random returns [0,1[
	this.z = Math.random() * 7 + 1;             //Max is 7 (excluded), min is 1 (included)
        this.y = Math.random() * a_canvas.height + 40; 

	//Set width, height and velocity
	this.width = 1 * this.z;
	this.height = 1 * this.z + 25; 		            //Height is always longer than width
	this.yspeed = (Math.random() * 21 + 15) / this.z;   //yvelocity is between 20.99 and 15 and takes depth factor          
    }

    fall()
    {
	this.y = this.y + this.yspeed;
	this.yspeed += 0.02;
	if (this.y > this.canvas.height)
        {
            this.y = 40;
	    this.yspeed = (Math.random() * 21 + 15) / this.z;   //yvelocity is between 20.99 and 15 and takes depth factor          
    
        }        
    }


    //Set color then draw line
    show()
    {

        this.context.fillStyle = "#8A2BE2";
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }


}