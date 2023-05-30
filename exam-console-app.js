// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Function to calculate the area of a square
function calculateSquareArea(side) {
    return side * side;
}

// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}

// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Calculate the areas
var circleArea = calculateCircleArea(5);
var squareArea = calculateSquareArea(4);
var triangleArea = calculateTriangleArea(3, 6);
var rectangleArea = calculateRectangleArea(4, 8);

// Calculate the total area
var totalArea = circleArea + squareArea + triangleArea + rectangleArea;

// Print the total area to the console
console.log("Total Area: " + totalArea);