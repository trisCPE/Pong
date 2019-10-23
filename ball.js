class Ball{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.r = 12;

        this.reset();
    }

    show() {
        fill(255)
        circle(this.x, this.y, this.r*2);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    collideLeftPaddle(p) {
     if (this.y - this.r < p.y + p.paddleHeight/2
     && this.y + this.r > p.y - p.paddleHeight/2
     && this.x - this.r < p.x + p.paddleWidth/2) {
             if (this.x > p.x) {
                            let diff = this.y - (p.y - p.paddleHeight/2);
                            let rad = radians(45);
                            let angle = map(diff, 0, p.paddleHeight, -rad, rad);
                            this.xSpeed = 5 * cos(angle);
                            this.ySpeed = 5 * sin(angle);
                            this.x = p.x + p.paddleWidth/2 + this.r;
               }
      }
     }

     collideRightPaddle(p) {
          if (this.y - this.r < p.y + p.paddleHeight/2 &&
              this.y + this.r > p.y - p.paddleHeight/2 &&
              this.x + this.r > p.x - p.paddleWidth/2) {
                  if (this.x < p.x) {
                           let diff = this.y - (p.y - p.paddleHeight/2);
                           let rad = radians(45);
                           let angle = map(diff, 0, p.paddleHeight, radians(225), radians(135));
                           this.xSpeed = 5 * cos(angle);
                           this.ySpeed = 5 * sin(angle);
                           this.x = p.x - p.paddleWidth/2 - this.r;
                    }
            }
          }


    reset() {
           this.x = width/2;
           this.y = height/2;
           let angle = random(-PI/4, PI/4);
           this.xSpeed = -5 * Math.cos(angle);
           this.ySpeed = 5 * Math.sin(angle);

           if (random(1) < 0.5) {
                this.xSpeed *= -1;
           }
        }

    collide() {
        if(this.y < 0 || this.y > height) {
            this.ySpeed *= -1;
         }

        if (this.x - this.r > width) {
            leftscore++;
            this.reset();
         }

        if (this.x + this.r < 0) {
            rightscore++;
            this.reset();
        }

         }

 }
