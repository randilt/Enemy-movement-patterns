/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numOfEnemies = 100;
const enemies = [];

class Enemy {
  constructor() {
    this.x = Math.random() * CANVAS_WIDTH;
    this.y = Math.random() * CANVAS_HEIGHT;
    this.width = 100;
    this.height = 100;
    this.speed = Math.random() * 4 - 2;
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
  }
  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

for (let i = 0; i < numOfEnemies; i++) {
  enemies.push(new Enemy());
}
console.log(enemies);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemies.forEach((enemy) => {
    enemy.draw();
    enemy.update();
  });
  requestAnimationFrame(animate);
}
animate();
