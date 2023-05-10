
var canvas = new fabric.Canvas('myCanvas');


ball_y=0;
ball_x=0;
hole_y=800;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL( "golf-h1.png", function(Img));{
	hole_obj=img;
	hole.ogj.scaleToHeight(50);
	hole.ogj.scaleTowidth(50);
	hole_obj.swet({
		top:hole_y,
		left:hole_x
	});
	canvas.add(ball_obj);

	new_image();
}

function new_image()
{
	fabic.Image.fromURL("ball.png", finction(img)); {
		ball_img = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	}
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ball_x=hole_x)&&(ball_y=hole_y)){
		canvas.remove(ball_obj);
	}
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 if(ball_y <=450)
		 {
			ball_y = 
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

