var letters = "0123456789ABCDEF";
var color = "#";
var shapeSize = "";
var shapeHeight = "";
var down = "";
var left = "";
var startTime = "";
var endTime = "";
var record = 5;
//var randomNumber = "";

document.getElementById("startButton").onclick = function() {
    document.getElementById("times").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    nextShape();
}


document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";
    endTime = new Date().getTime();
    var speed = (endTime - startTime)/1000;
    document.getElementById("seconds").innerHTML = speed;
    if (speed < record){
        record = speed;
    }
    document.getElementById("bestTime").innerHTML = record;
    setTimeout(nextShape, Math.random()*3000); 
};


function nextShape(){
    reset();
    randomColor();
    dimensions();
    circleOrSquare();
    downAndLeft();
    document.getElementById("shape").style.top = down + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.backgroundColor = color;
    document.getElementById("shape").style.width = shapeSize + "px";
    document.getElementById("shape").style.height = shapeSize + "px";
    document.getElementById("shape").style.display = "block";
    startTime = new Date().getTime();
};

function randomColor(){
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
};

function dimensions(){
    shapeSize = Math.floor(Math.random() * 300) + 50;
};

function circleOrSquare(){
    if (Math.random() >= 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        // document.getElementById("shape").style.borderRadius = "100%";
    }

}

function downAndLeft() {
    down = Math.floor(Math.random() * 500);
    left = Math.floor(Math.random() * 500);
};

function reset(){
    color = "#";
    shapeSize = "";
    down = "";
    left = "";
    document.getElementById("shape").style.borderRadius = "0px"
};