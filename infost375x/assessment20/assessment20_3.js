window.onload = () => {
    // Get context for our <canvas> element
    const ctx = document.getElementById('canvas').getContext('2d');

    // Get our cat image with id "cats"
    const catImage = document.getElementById('cats');

    // Draw that image into our canvas
    ctx.drawImage(catImage, 50, 50, 300, 390);
};
