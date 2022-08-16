function setup() {
    video = creatCapture(Video);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    background('#6C91C2');
    textSize(difference);
    fill('FFE787');
    text(Namr, 50, 400);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWristX;
        difference = floor(leftWristX - rightWristX);
    }
}