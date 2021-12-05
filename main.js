function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(450, 200);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 50, 50, 500, 400);
    tint(tint_color);
    fill("blue");
    rect(20, 460 , 600, 30);
    fill("blue");
    rect(10, 10 , 600, 30);
    fill("blue");
    rect(0, 0 , 30, 480);
    fill("blue");
    rect(600, 0 , 30, 480);
   

    fill("red");
    ellipse(20,20,50,50);
    fill("red");
    ellipse(620,460,50,50);
    fill("red");
    ellipse(20,460,50,50);
    fill("red");
    ellipse(620,20,50,50);
    
}

function take_snapshot(){
    save('filter_project.png');
}

function tfilter()
{
    tint_color = document.getElementById("color").value;
}