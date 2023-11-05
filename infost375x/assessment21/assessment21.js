// [Canvas 1] Get context for our first <canvas> element and set some default stroke style
const ctx = document.getElementById('canvas1').getContext('2d');
ctx.strokeStyle = '#000000';
ctx.lineWidth = 10;

// [Canvas 1] Line 1
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(350, 50);
ctx.lineCap = 'round';
ctx.stroke();

// [Canvas 1] Line 2
ctx.beginPath();
ctx.moveTo(75, 100);
ctx.lineTo(450, 100);
ctx.lineCap = 'square';
ctx.stroke();

// [Canvas 1] Line 3
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(550, 150);
ctx.lineCap = 'butt';
ctx.stroke();

// [Canvas 2] Get context for our second <canvas> element
const ctx2 = document.getElementById('canvas2').getContext('2d');

// [Canvas 2] Write "University of Wisconsin-Milwaukee" with some styling
ctx2.font = '42px Arial';
ctx2.strokeStyle = '#000000';
ctx2.fillStyle = '#CCCCCC';
ctx2.shadowBlur = 3;
ctx2.shadowColor = '#333333';
ctx2.fillText('University of Wisconsin-Milwaukee', 50, 50);
ctx2.strokeText('University of Wisconsin-Milwaukee', 50, 50);


// [Canvas 3] Get context for our third <canvas> element
const ctx3 = document.getElementById('canvas3').getContext('2d');

// [Canvas 3] Draw a triangle
ctx3.fillStyle = '#FFBD00';
ctx3.strokeStyle = '#000000';
ctx3.lineWidth = 10;
ctx3.beginPath();
ctx3.moveTo(150, 20);
ctx3.lineTo(250, 175);
ctx3.lineTo(50, 175);
ctx3.closePath();
ctx3.fill();
ctx3.stroke();

// [Canvas 3] Draw a rectangle
ctx3.beginPath();
ctx3.fillStyle = '#00AEFF';
ctx3.strokeStyle = '#666666';
ctx3.lineWidth = 5;
ctx3.rect(300, 20, 150, 75);
ctx3.closePath();
ctx3.fill();
ctx3.stroke();

// [Canvas 3] Draw a circle using arc
ctx3.beginPath();
ctx3.fillStyle = '#AE00FE';
ctx3.strokeStyle = '#333333';
ctx3.lineWidth = 15;
ctx3.arc(600, 250, 60, 0, 2 * Math.PI);
ctx3.fill();
ctx3.stroke();
