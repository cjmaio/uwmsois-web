// [Canvas 1] Get context for our first <canvas> element
const ctx = document.getElementById('canvas1').getContext('2d');
ctx.strokeStyle = '#880000';
ctx.lineWidth = 3;

// [Canvas 1] Create Circle 1
ctx.save();
ctx.beginPath();
ctx.translate(100, 40);
ctx.arc(0, 0, 25, 0, 2 * Math.PI);
ctx.stroke();
ctx.restore();

// [Canvas 1] Create Circle 2
ctx.save();
ctx.beginPath();
ctx.translate(250, 60);
ctx.scale(1, 1.75);
ctx.arc(0, 0, 25, 0, 2 * Math.PI);
ctx.stroke();
ctx.restore();

// [Canvas 1] Create Circle 3
ctx.save();
ctx.beginPath();
ctx.translate(450, 75);
ctx.scale(1.25, 2.5);
ctx.arc(0, 0, 25, 0, 2 * Math.PI);
ctx.stroke();
ctx.restore();

// [Canvas 2] Get context for our second <canvas> element
const ctx2 = document.getElementById('canvas2').getContext('2d');
ctx2.fillStyle = '#FFBD00';

// [Canvas 2] Create Triangle 1
ctx2.save();
ctx2.translate(0, -30);
ctx2.beginPath();
ctx2.moveTo(50, 50);
ctx2.lineTo(150, 50);
ctx2.lineTo(50, 150);
ctx2.closePath();
ctx2.fill();
ctx.restore();

// [Canvas 2] Create Triangle 2
ctx2.save();
ctx2.translate(175, 20);
ctx2.beginPath();
ctx2.moveTo(50, 50);
ctx2.lineTo(150, 50);
ctx2.lineTo(50, 150);
ctx2.closePath();
ctx2.fill();
ctx.restore();

// [Canvas 2] Create Triangle 3
ctx2.save();
ctx2.translate(275, 50);
ctx2.beginPath();
ctx2.moveTo(50, 50);
ctx2.lineTo(150, 50);
ctx2.lineTo(50, 150);
ctx2.closePath();
ctx2.fill();
ctx.restore();
