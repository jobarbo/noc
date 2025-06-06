// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// viewport
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
	pixelDensity(6);
	for (let i = 0; i < total; i++) {
		randomCounts[i] = 0; // initialize all counts to 0
	}
}

function draw() {
	background(255, 255, 247);
	let index = floor(random(randomCounts.length)); // pick a random index
	randomCounts[index] += random(1, 50); // increment the count at that index

	stroke(0);
	fill(175);
	let w = width / randomCounts.length;
	for (let x = 0; x < randomCounts.length; x++) {
		rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
	}
}
