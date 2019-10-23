const width = 600;
const height = 400;
var leftscore = 0;
var rightscore = 0;
var dots = [];
var dSize = 10;


function setup() {
  createCanvas(600, 400);
  paddle1 = new Paddle(20);
  paddle2 = new Paddle(580);
  ball = new Ball();

  for(let i = dSize/2; i < height; i+=dSize*2) {
    dots.push(createVector(width/2-dSize/2, i));
  }
}

function draw() {
  background(0);
  stroke(255);

  fill(0, 255, 0);
  noStroke();
  drawSquares();

  ball.collideLeftPaddle(paddle1);
  ball.collideRightPaddle(paddle2);


  paddle1.show();
  paddle1.update();
  paddle2.show();
  paddle2.update();

  ball.show();
  ball.update();
  ball.collide();

  fill(255);
  textSize(20);
  text(leftscore, width/2 - dSize/2 - 65, 40);
  text(rightscore, width/2 - dSize/2 + 50, 40);
}

function drawSquares() {
    for(let i = 0; i<dots.length; i++){
        let x = dots[i].x;
        let y = dots[i].y;

        rect(x, y, dSize, dSize);
    }
}

function keyReleased() {
    paddle1.move(0);
    paddle2.move(0);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        paddle1.move(-10);
    } else if (keyCode == DOWN_ARROW) {
        paddle1.move(10);
    } else if (keyCode == '90') {
        paddle2.move(-10);
    } else {
        paddle2.move(10);
    }
}


