// Data for average monthly temperatures in Milwaukee, Wisconsin
// Source: https://www.usclimatedata.com/climate/milwaukee/wisconsin/united-states/uswi0455
const temps = [
    { month: 'Jan', high: 29, low: 16 },
    { month: 'Feb', high: 33, low: 19 },
    { month: 'Mar', high: 42, low: 28 },
    { month: 'Apr', high: 54, low: 37 },
    { month: 'May', high: 65, low: 47 },
    { month: 'Jun', high: 75, low: 57 },
    { month: 'Jul', high: 80, low: 64 },
    { month: 'Aug', high: 78, low: 63 },
    { month: 'Sep', high: 71, low: 55 },
    { month: 'Oct', high: 59, low: 43 },
    { month: 'Nov', high: 47, low: 30 },
    { month: 'Dec', high: 33, low: 20 }
];

// Base X and Y positions
const xBase = 90;
const yBase = 746;

// Set the size of our marker, and calculate our line offset (since we want the lines to fall in between the markers)
const markerSize = 8;
const lineOffset = markerSize / 2;

// Set the length of our axes
const axisLength = 675;

// Values to multiply with our (xIdx for X, yValue for Y) to figure out how much to add / subtract from their respective base values
const xIncrement = 56;
const yIncrement = 7.5;

// Helper function to draw our base chart
const drawBaseChart = (ctx) => {
    ctx.save();

    // Draw chart title
    ctx.font = '28px monospace';
    ctx.fillText('Milwaukee, WI Average Monthly Temperatures', 80, 50);

    // Set the line width we're going to use for the X and Y axis
    ctx.lineWidth = 3;

    // Using our configured xBase and yBase values, calculate our X and Y axis start points
    const xStart = xBase - 30;
    const yStart = yBase + 4;

    // X Axis
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart, yStart);
    ctx.lineTo(xStart + axisLength, yStart);
    ctx.stroke();

    // Y Axis
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart, yStart);
    ctx.lineTo(xStart, yStart - axisLength)
    ctx.stroke();

    // Set the font size we're going to use for the X and Y axis labels
    ctx.font = '17px monospace';

    // X Axis Labels
    ctx.fillText(temps.map((month) => month.month).join(' | '), xStart + 20, yStart + 26);

    // Y Axis Labels
    const startAt = 0;
    const endAt = 90;
    const step = 5;
    for (let value = startAt; value <= endAt; value += step) {
        const textValue = value < 10 ? ` ${value} -` : `${value} -`;
        ctx.fillText(textValue, xStart - 40, (yStart + 4 - (value * 7.5)));
    }

    ctx.restore();
};

// Helper function to draw our markers
const drawMarkers = (ctx, yValues) => {
    ctx.save();

    // Iterate through all our Y values, determine their X and Y points, and draw a marker at that point
    for (const [idx, yValue] of yValues.entries()) {
        const xPoint = xBase + (idx * xIncrement);
        const yPoint = yBase - (yValue * yIncrement);

        ctx.fillRect(xPoint, yPoint, markerSize, markerSize);
    }

    ctx.restore();
};

// Helper function to draw our lines
const drawLines = (ctx, yValues, color) => {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;

    // Iterate through all our Y values, determine their X and Y points, and draw a line to that
    // point (or move to it if it's the first point)
    for (const [idx, yValue] of yValues.entries()) {
        const xPoint = xBase + (idx * xIncrement) + 4;
        const yPoint = yBase - (yValue * yIncrement) + 4;

        if (idx === 0) {
            ctx.moveTo(xPoint, yPoint);
        } else {
            ctx.lineTo(xPoint, yPoint);
        }
    }

    ctx.stroke();
    ctx.restore();
}

// Get our canvas context
const ctx = document.getElementById('canvas').getContext('2d');

// Draw our chart and data using the helper functions from above
drawBaseChart(ctx);
drawLines(ctx, temps.map((month) => month.low), 'blue');
drawMarkers(ctx, temps.map((month) => month.low));
drawLines(ctx, temps.map((month) => month.high), 'red');
drawMarkers(ctx, temps.map((month) => month.high));
