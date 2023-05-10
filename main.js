function preload(){
    clone_nose=loadImage('https://i.postimg.cc/fRtLMGHV/R.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoded);

poseNet.on('pose', gotPosses);
}
function modelLoded(){
    console.log("Posenet is Initialized ");

}
noseX=0;
noseY=0;
 function gotPosses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        console.log("nose x="+noseX );
        noseY=results[0].pose.nose.y;
        console.log("nose y="+noseY );
    }
 }

function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,255,255);
    //circle(noseX,noseY,20);
    image(clone_nose,noseX-15,noseY-15,30,30);
}
function take_snapshot(){
    save('My_Photo.png');
}