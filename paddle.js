class Paddle{
    constructor(x) {
        this.x = x;
        this.y = height/2;
        this.paddleWidth = 20;
        this.paddleHeight = 100;
        this.ychange = 0;
    }

    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.paddleWidth, this.paddleHeight);
    }

    update() {
        this.y += this.ychange;
        this.y = constrain(this.y, this.paddleHeight/2, height-this.paddleHeight/2);
    }

    move(steps) {
         this.ychange = steps;
       }


}

