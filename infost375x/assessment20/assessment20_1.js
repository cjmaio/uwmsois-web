// Get context for our <canvas> element
const ctx = document.getElementById('canvas').getContext('2d');

// Rectangle 1
ctx.fillStyle = '#FFBD00';
ctx.fillRect(5, 5, 100, 150);

// Rectangle 2
ctx.fillStyle = '#FF0000';
ctx.lineJoin = 'round';
ctx.lineWidth = 5;
ctx.strokeRect(120, 10, 100, 50);

// Rectangle 3
ctx.lineJoin = 'bevel';
ctx.lineWidth = 20;
ctx.strokeStyle = '#0000FF';
ctx.strokeRect(250, 20, 75, 150);

// Rectangle 4
ctx.strokeStyle = '#FFBD00';
ctx.lineJoin = 'miter';
ctx.lineWidth = 5;
ctx.strokeRect(30, 250, 200, 50);

// Rectangle 5
ctx.fillStyle = '#03A49F';
ctx.fillRect(375, 165, 150, 350);
