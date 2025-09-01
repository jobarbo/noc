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

let randomCounts = [];

function setup() {
	DIM = min(windowWidth, windowHeight);
	MULTIPLIER = DIM / DEFAULT_SIZE;
	canvas = createCanvas(DIM, DIM * 1.0);
	pixelDensity(2);
	colorMode(OKLCH, 100, 100, 360, 100);
	//colorMode(HSB, 360, 100, 100, 100);
	background(40, 5, 35);
}

function draw() {
	let div = map(cos(frameCount / 100), -1, 1, 5, 55);
	let x = randomGaussian(width / 2, width / div);
	let y = randomGaussian(height / 2, height / div);
	s = w / 15;
	hue = randomGaussian(15, map(cos(frameCount / 100), -1, 1, 155, 1));
	stroke(80, 30, hue);
	strokeWeight(s);
	fill(100, 30, hue, 100);
	//fill(random(360), 30, 100, 10);
	circle(x, y, w);
}
