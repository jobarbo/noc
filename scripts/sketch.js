// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let DEFAULT_SIZE = 948;
let W = window.innerWidth;
let H = window.innerHeight;
let DIM;
let MULTIPLIER;

let x, y;
let w = 100;
let speed = 13;

function setup() {
	DIM = min(windowWidth, windowHeight);
	MULTIPLIER = DIM / DEFAULT_SIZE;
	c = createCanvas(DIM, DIM * 1.33);
	pixelDensity(2);
	background(255);

	x = width / 2;
	y = height / 2;
}

function draw() {
	background(222, 255, 222);
	fill(0);
	ellipse(x, y, w, w);
	move();
}

function move() {
	let r = random(0, 1);
	let r2 = random(0, 1);
	if (r2 < 0.5) {
		if (r < 0.25) {
			x += speed;
		} else if (r < 0.5) {
			x -= speed;
		} else if (r < 0.75) {
			y += speed;
		} else {
			y -= speed;
		}
	} else {
		if (x > mouseX) {
			x -= speed;
		} else if (x < mouseX) {
			x += speed;
		}
		if (y > mouseY) {
			y -= speed;
		} else if (y < mouseY) {
			y += speed;
		}
	}
}
