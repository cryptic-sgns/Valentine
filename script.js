const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

function openLetter(letter) {
  letter.classList.toggle('open');
}

const runaway = document.getElementById('runaway');

runaway.addEventListener('mouseover', () => {

  const x = Math.random() * 80;
  const y = Math.random() * 200;

  runaway.style.left = `${x}%`;
  runaway.style.top = `${y}px`;
});

function confettiEffect() {
  alert('Thank you for reading till the end ❤️');
}

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0; i<120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2
  });
}

function drawStars() {

  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = 'white';

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

drawStars();
