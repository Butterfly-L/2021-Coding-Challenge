const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d'); 

// Variables
let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};
let obstacleType = [{text: '加班', color: '#4530ff'},{text: '渣男', color: '#009c27'},{text: '經痛', color: '#ff3e30'}];
let initialSpawnTimer = 200; //數字越小越快歸零就會越多敵人
let spawnTimer = initialSpawnTimer;

// Event Listeners
document.addEventListener('keydown', function (evt) {
  keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
  keys[evt.code] = false;
});

//遊戲最開始的繪製
function createCanvas () {
  canvas.width = 648;
  canvas.height = 572;
  ctx.font = "20px sans-serif";
  //做玩家
  player = new Player(25, 0, 80, 180);
  
  resetGame();
  scoreText = new Text("Score: " + score, 25, 25, "left", "#ffffff", "20");
  highscoreText = new Text("Highscore: " + highscore, canvas.width - 25, 25, "right", "#ffffff", "20");

  //呼叫Update
  requestAnimationFrame(Update);
}

//做障礙物
function createObstacle () {
  //一次只做一個
  let size = RandomIntInRange(40, 70);
  let typeNum = RandomIntInRange(0, 2);
  let type = RandomIntInRange(0, 1);
  let obstacle = new Obstacle(canvas.width + size, canvas.height - size, size, size, obstacleType[typeNum]);

  //做高高的障礙物
  if (type == 1) {
    obstacle.y -= player.originalHeight - 10;
  }
  obstacles.push(obstacle);
}


function RandomIntInRange (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


//遊戲進行時Update會一直呼叫自己
function Update () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //製作敵人
  spawnTimer--; //控制敵人速度
  if (spawnTimer <= 0) {
    createObstacle(); 
    spawnTimer = initialSpawnTimer - gameSpeed * 8; //數字越來越小=製作敵人速度越來越快
    if (spawnTimer < 60) {
      spawnTimer = 60; //但最快還是有60
    }
  }
  
  //Spawn enimies
  for (let i = 0; i < obstacles.length; i++) {
    let o = obstacles[i];

    //移除滑出視窗的
    if (o.x + o.w < 0) {
      obstacles.splice(i, 1); 
    }

    o.Update(); //放置敵人位置=敵人移動的速度

    //撞到障礙物
    if (
      player.x < o.x + o.w &&
      player.x + player.w > o.x &&
      player.y < o.y + o.h &&
      player.y + player.h > o.y
      ) {
        resetGame();
    }
  }
  
  
  setScore(); //設置分數
  player.Animate(); //讓player動起來
  gameSpeed += 0.003; //加快速度
  requestAnimationFrame(Update);
}

function setScore(){
  score++;
  scoreText.t = "Score:" + score;
  scoreText.Draw();

  if (score > highscore) {
    highscore = score;
    highscoreText.t = "Highscore: " + highscore;
  }
  highscoreText.Draw();
}

function resetGame(){
  obstacles = [];
  score = 0;
  highscore = localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0;
  spawnTimer = initialSpawnTimer;
  gameSpeed = 3;
  gravity = 1;  
  window.localStorage.setItem('highscore', highscore);
}

//最開始呼叫
createCanvas();

