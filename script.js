/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numOfEnemies = 100;
const enemies = [];

let gameFrame = 0;
class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "enemy1.png";
    this.x = Math.random() * CANVAS_WIDTH;
    this.y = Math.random() * CANVAS_HEIGHT;
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
    //animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < numOfEnemies; i++) {
  enemies.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemies.forEach((enemy) => {
    enemy.draw();
    enemy.update();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
