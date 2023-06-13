statuse="";

function preload(){
    Image=loadImage("Ball.jpg");
}

function setup(){
    createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
     document.getElementById("status").innerHTML="status: detecting objects";
}

function modelloaded(){
    console.log(" model will be executed");
    statuse=true;
    objectDetector.detect(img,gotresults);
}

function gotresults(){
    if(error){
        console.log(error);
   }
   console.log(results);
   objects=results;
}
}