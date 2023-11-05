// Get context for our <canvas> element
const ctx = document.getElementById('canvas').getContext('2d');

// Rectangle with linear gradient in the stroke
const linearGradient = ctx.createLinearGradient(0, 0, 120, 130);
linearGradient.addColorStop(0, '#000000');
linearGradient.addColorStop(1, '#FFBD00');
ctx.strokeStyle = linearGradient;
ctx.lineWidth = 10;
ctx.strokeRect(25, 25, 100, 250);

// Rectangle with radial gradient in the fill
const radialGradient = ctx.createRadialGradient(350, 350, 50, 350, 350, 100);
radialGradient.addColorStop(0, '#FF00FF');
radialGradient.addColorStop(1, '#00FFFF');
ctx.fillStyle = radialGradient;
ctx.fillRect(250, 250, 200, 200);
