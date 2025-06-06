// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let DEFAULT_SIZE = 948;
let W = window.innerWidth;
let H = window.innerHeight;
let DIM;
let MULTIPLIER;

let randomCounts = [];

let total = 50;

function setup() {
	DIM = min(windowWidth, windowHeight);
	MULTIPLIER = DIM / DEFAULT_SIZE;
	c = createCanvas(DIM, DIM * 1.33);
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
