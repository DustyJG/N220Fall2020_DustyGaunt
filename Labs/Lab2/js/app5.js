let xPos = 400;
let yPos = 300;
let xSpeed = 1;
let startX = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255)
startX = startX + 1;

if( startX > 199 ) {
    startX = 0;
}

circle(xPos, yPos, startX);
}