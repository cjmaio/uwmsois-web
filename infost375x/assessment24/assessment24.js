// Types of rankings
const rankingTypes = [
    { type: 'friendliness', name: 'Friendliness' },
    { type: 'traffic', name: 'Traffic' },
    { type: 'thingsToDo', name: 'Things to do' },
    { type: 'weather', name: 'Weather' },
];

// City ranking data
const cities = [
    { city: 'Milwaukee', friendliness: 400, traffic: 300, thingsToDo: 150, weather: 100 },
    { city: 'Seattle', friendliness: 300, traffic: 200, thingsToDo: 250, weather: 250 },
    { city: 'San Francisco', friendliness: 250, traffic: 150, thingsToDo: 300, weather: 350 },
    { city: 'Pittsburgh', friendliness: 350, traffic: 350, thingsToDo: 200, weather: 200 },
    { city: 'Chicago', friendliness: 100, traffic: 100, thingsToDo: 350, weather: 150 },
    { city: 'New York', friendliness: 50, traffic: 50, thingsToDo: 450, weather: 125 },
];

// Define our chart height and width
const chartWidth = 800;
const chartHeight = 450;

// Define our X and Y start coordinates
const xStart = 275;
const yStart = 570;

// Calculate the steps for the X axis values, to get a multiplier to use below
const xStartAt = 0;
const xEndAt = 450;
const xStep = 50;
const xSteps = (xEndAt - xStartAt) / xStep;
const xMultiplier = chartWidth / xSteps;

// Calculate the steps for the Y axis values, to get a multiplier to use below
const ySteps = rankingTypes.length;
const yMultiplier = (chartHeight - 50) / ySteps;

// Helper function to draw our base chart
const drawBaseChart = (ctx, title) => {
    ctx.save();

    // Draw chart title
    ctx.font = '36px Helvetica';
    ctx.fillText(title, 30, 60);

    // Set the line width we're going to use for the X and Y axis container
    ctx.lineWidth = 1;
    ctx.strokeRect(xStart, 100, chartWidth, chartHeight);

    // X Axis Labels and Lines
    ctx.font = '17px monospace';
    ctx.strokeStyle = '#999999';
    for (let value = xStartAt; value <= xEndAt; value += xStep) {
        const stepIdx = value / xStep;

        // Calculate the X and Y position for the text. We offset the X by 10 so it's can be centered on the line
        const xPosition = xStart - 10 + (stepIdx * xMultiplier);
        const yPosition = yStart;

        // Add in text for the X value
        ctx.fillText(value === 0 ? ` 0` : value, xPosition, yPosition);

        // Calculate the X and Y start position for the bar. Note how we need to offset the X
        // position by undoing the 10 offset from above. We also need to offset the Y position by 20
        // to bring us up to where the chart starts, not where we put the text.
        const lineXStart = xPosition + 10;
        const lineYStart = yPosition - 20;

        // Draw the line representing the X value
        ctx.beginPath();
        ctx.moveTo(lineXStart, lineYStart);
        ctx.lineTo(lineXStart, lineYStart - chartHeight);
        ctx.stroke();
    }

    // Y Axis Labels
    ctx.font = '28px Helvetica'
    for (const [idx, rankingType] of rankingTypes.entries()) {
        ctx.fillText(rankingType.name, xStart - 220, yStart - ((idx + 1) * yMultiplier));
    }

    ctx.restore();
};

// Helper function to draw our bars
const drawBars = (ctx, cityData) => {
    ctx.save();

    // Note: need to reverse the ranking types because we're now rendering from the top (drawing rectangles)
    for (const [idx, rankingType] of Object.entries([...rankingTypes].reverse())) {
        const yValue = cityData[rankingType.type];

        const xPoint = xStart;
        const yPoint = (yStart - chartHeight + 15) + (idx * yMultiplier);

        const length = chartWidth / xEndAt * yValue;

        if (yValue <= 150) {
            ctx.fillStyle = 'purple';
        } else if (yValue > 150 && yValue < 300) {
            ctx.fillStyle = 'red';
        } else if (yValue >= 300) {
            ctx.fillStyle = 'blue';
        }

        ctx.fillRect(xPoint, yPoint, length, 50);
    }

    ctx.restore();
};

const renderChart = () => {
    // Get our canvas context
    const ctx = document.getElementById('canvas').getContext('2d');

    // Figure out our selected city
    const selectedCity = document.getElementById('city-select').value;

    // Clear the canvas so we can draw the chart again
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw our chart and data using the helper functions from above
    drawBaseChart(ctx, `City: ${selectedCity}`);

    drawBars(ctx, cities.find((city) => city.city === selectedCity));
};

window.onload = () => {
    // Populate our options in the select dropdown
    document.getElementById('city-select').innerHTML = cities.map((city) => `<option value="${city.city}">${city.city}</option>`).join('');
    renderChart();
};
