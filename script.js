// script.js
window.onload = function() {
    const canvas = document.getElementById('dotCanvas');
    const ctx = canvas.getContext('2d');

    // Set the canvas size to match the screen size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 2; // Double the height to ensure enough space for all dots

    // Number of dots
    const numDots = 44000;

    // Dot properties
    const dotRadius = 3;
    const dotSpacing = 12; // Adjust this value for the dot spacing

    // Calculate the number of columns and rows
    const cols = Math.floor(canvas.width / dotSpacing);
    const rows = Math.floor(canvas.height / dotSpacing);

    // Function to draw the dots in a grid pattern
    function drawDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.fillStyle = '#fff';

        // Loop to create a grid of dots
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                // Calculate x, y position for each dot
                const x = col * dotSpacing;
                const y = row * dotSpacing;

                // Draw each dot
                ctx.beginPath();
                ctx.arc(x, y, dotRadius, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    }

    // Draw dots when the page loads
    drawDots();

    // Adjust canvas size on window resize
    window.onresize = function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 2; // Keep height large enough to hold all dots
        drawDots(); // Redraw the dots after resizing
    };
};

