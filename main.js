function preload()
{
image=loadImg("background.png");
}

function setup()
{
canvas=createCanvas(400,350);
 canvas.position(480,350);

}

function draw()
{
 image(img,0,0,350,350);
}