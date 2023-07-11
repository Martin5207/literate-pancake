nosex=0;
nosey=0;
leftx=0;
rightx=0;
notsame=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,500);
    canvas.position(700,120)
    posenet=ml5.poseNet(video,molo)
    posenet.on("pose",rezzult);
}
function molo(){
    console.log("this is ready");
}
function draw(){
background("blue")
fill("yellow")
stroke("black")
square(nosex,nosey,notsame)
document.getElementById("square_side").innerHTML="side of the square is="+notsame+"px";

}
function rezzult(results){
    if(results.length>0){console.log(results)
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
console.log("nosex="+nosex+" nosey= "+nosey)
leftx=results[0].pose.leftWrist.x;
rightx=results[0].pose.rightWrist.x
notsame=floor(leftx-rightx);
console.log("leftx="+leftx+"rightx="+rightx+"notsame="+notsame);


}
}

