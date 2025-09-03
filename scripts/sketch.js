// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let DEFAULT_SIZE = 948;
let W = window.innerWidth;
let H = window.innerHeight;
let DIM;
let MULTIPLIER;
let canvas;
let w = 30;
let s = w / 15;
let hue = 0;
let t = 3;
let randomCounts = [];

function setup() {
	DIM = min(windowWidth, windowHeight);
	MULTIPLIER = DIM / DEFAULT_SIZE;
	canvas = createCanvas(DIM, DIM * 1.0);
	pixelDensity(2);
	colorMode(OKLCH, 100, 100, 360, 100);
	//colorMode(HSB, 360, 100, 100, 100);
	background(10, 5, 35);

	let pos_x = 0;
	let pos_y = randomGaussian(height / 2, height / 8);

	for (let i = 0; i < width; i += 1) {
		let n = map(noise(t), 0, 1, -2, 2);

		pos_x = i;
		pos_y += n;

		fill(255);
		noStroke();
		ellipse(pos_x, pos_y, 15, 15);

		t += 0.01;
	}
}

function draw() {
	noLoop();
}
