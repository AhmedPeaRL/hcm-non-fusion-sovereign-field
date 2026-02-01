const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const nodes = [
  { x: 200, y: 300 },
  { x: 600, y: 200 },
  { x: 900, y: 500 }
];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();
