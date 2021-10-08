class Player {
  constructor (x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    
    this.dy = 0;
    this.jumpForce = 15;
    this.originalHeight = h;
    this.grounded = false;
    this.jumpTimer = 0;

    //draw animate
    this.cols = 5;
    this.rows = 1;
    this.spriteSheet = new Image();
    this.spriteSheet.src="../assets/canvasGame/test.png";  
    this.spriteWidth = 229.4; 
    this.spriteHeight = 557;
    this.srcX =0;
    this.srcY =0;

    //控制主角的動畫速度
    this.totalFrames = 5;
    this.currentFrame = 0;
    this.frameDrawn =0;
  }
  
  Animate () {
    // 跳
    if (keys['Space'] || keys['KeyW']) {
      this.Jump();
    } else {
      this.jumpTimer = 0;
    }

    // 蹲下
    if (keys['ShiftLeft'] || keys['KeyS']) {
      this.h = this.originalHeight / 3 * 2;
    } else {
      this.h = this.originalHeight;
    }
    this.y += this.dy; //跳起來會變高，dy是負的

    // 跳起來後要讓他掉下來的Gravity
    if (this.y + this.h < canvas.height) {
      this.dy += gravity; //全域宣告
      this.grounded = false;
    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = canvas.height - this.h;
    }

    this.currentFrame = this.currentFrame % this.totalFrames;
    this.srcX = this.currentFrame * this.spriteWidth;

    this.frameDrawn++;
    if(this.frameDrawn>=10){
      this.currentFrame++;
      this.frameDrawn=0;
    }

    this.Draw();
  }

  Jump () {
    //在地上的時候
    if (this.grounded && this.jumpTimer == 0) {
      this.jumpTimer = 1;
      this.dy = -this.jumpForce; 
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
      //按壓越久，jumptimer越大, y的位置越高
      this.jumpTimer++;
      this.dy = - this.jumpForce - (this.jumpTimer / 50);
      //jumptimer除以的係數越小，可以跳越高
    }
  }
  
  Draw () {
    ctx.drawImage(this.spriteSheet, this.srcX, this.srcY,this.spriteWidth, this.spriteHeight, this.x, this.y,this.w, this.h);    
  }
}
class Obstacle {
  constructor (x, y, w, h, t) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t; //type = 文字和顏色
  }
  
  Update () {
    this.x += -gameSpeed; //敵人的位置, gamespeed會在start時候宣告
    this.Draw();
  }

  Draw () {
    ctx.beginPath();
    ctx.fillStyle = this.t.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(this.t.text, this.x + 40, this.y+ 20); //寫上文字
    ctx.closePath();
  }
}

class Text {
  constructor (t, x, y, a, c, s){
      this.t = t;
      this.x = x;
      this.y = y;
      this.a = a;
      this.c = c;
      this.s = s;    
    }

  Draw () {
      ctx.beginPath();
      ctx.fillStyle = this.c;
      ctx.font = this.s + "px sans-serif";
      ctx.textAlign = this.a;
      ctx.fillText(this.t, this.x, this.y);
      ctx.closePath();
  }
}