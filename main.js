rigtWristX="";
rigtWristY="";

function preload()
{

}

function setup()
{
 canvas=createCanvas(400,350);
 canvas.position(480,350);
 video.createCapture(VIDEO);
 video.hide();
 canvas.parent("canvas");
 
 posenet=ml5.poseNet(video,modelloaded);
 posenet.on('pose',gotposes);
}

function modelloaded()
{
 console.log("model is loaded");
}

function gotposes(results)

 if(results.length>0)
{
  console.log(results);
  rigtWristX=results[0].pose.rigtWrist.x;
  rigtWristY=results[0].pose.rigtWrist.y;
}


function start_game()
{
  
  document.getElementById("status").innerHTML="Game is Loading";
}


function draw()
{
 image(img,0,0,350,350);

 fill("red");
 stroke("red");
 circle(rigtWristY,rigtWristX,50,50);
}