// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function setup() {
	let canvas = createCanvas(400, 400);
	canvas.parent(select("main")); // Attach canvas to main frame container
	pixelDensity(5);
	background(255);
}

function draw() {
	let hue = 1;
	let size = random(1, 10);
	console.log(size);
	fill(hue, 255);
	stroke(hue, 255);
	circle(random(width), random(height), size);
}
