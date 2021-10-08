//canvas 起手式
console.log('canvas srpite')
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

//canvas 放圖片起手式
const spriteSheet = new Image();
spriteSheet.src="../assets/canvasGame/test.png";

// 讓動畫放大也很好看
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;


//spriteSheet的寬高除以圖片有幾格，就是一格的寬度和高度
//這裡有五格，但只有一行
let cols = 5;
let rows = 1;
let spriteWidth = 1147 / cols;
let spriteHeight = 557 / rows;
//圖片切割的起始點
let srcX = 0;
let srcY = 0;

//這邊是控制速度用的～
let totalFrames = 5;
let currentFrame = 0;
let frameDrawn =0;


function animate(){
  
  //先清掉畫布
  ctx.clearRect(0,0,canvas.width, canvas.height);
  
  
  //這邊用於數的概念來看現在是第幾格了～等到第五格上限時，currentFrame又回從一開始～
  currentFrame = currentFrame % totalFrames;
  //現在這個是第幾格 = 
  srcX = currentFrame * spriteWidth;
  console.log('currentFrame'+currentFrame);
  console.log('totalFrames'+totalFrames);
  console.log('srcX'+srcX);
  console.log('spriteWidth'+spriteWidth);
  console.log('spriteHeight'+spriteHeight);

  

  //   resizeImage();
  // ctx.drawImage(spriteSheet, srcX, srcY, spriteWidth, spriteHeight, 0,0 ,spriteWidth, spriteHeight);
  ctx.drawImage(spriteSheet, srcX, srcY, spriteWidth, spriteHeight, 0,0 ,spriteWidth, spriteHeight);
  // ctx.drawImage(spriteSheet, 0, srcY, 0,0 );
  
  //就是這邊控制速度
  //等於是這個animate被呼叫10次以後，currentFrame才會前進一格，以控制速度
  frameDrawn++;

  if(frameDrawn>=10){
    currentFrame++;
    frameDrawn=0;
  }

  //重複呼叫自己
  requestAnimationFrame(animate);
}


function loadImage(){
  animate();
}

//異步操作，讓圖片載入後才執行
spriteSheet.onload = loadImage();

// ref: https://www.youtube.com/watch?v=MHGgVlrlkYc&t=907s