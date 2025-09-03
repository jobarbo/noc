// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let DEFAULT_SIZE = 948;
let W = window.innerWidth;
let H = window.innerHeight;
let DIM;
let MULTIPLIER;
let canvas;
let walkers = [];
let walker;

function setup() {
	DIM = min(windowWidth, windowHeight);
	MULTIPLIER = DIM / DEFAULT_SIZE;
	canvas = createCanvas(DIM, DIM * 1.0);
	pixelDensity(2);
	frameRate(1);
	colorMode(OKLCH, 100, 100, 360, 100);
	background(40, 5, 35);
	walker = new Walker();
}

function draw() {
	walker.step();
	walker.show();
}

class Walker {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
	}

	show() {
		stroke(0);
		ellipse(this.x, this.y, 10, 10);
	}

	step() {
		let step = 5;
		let xstep = int(acceptreject() * step);
		if (random([false, true])) {
			xstep *= -1;
		}
		let ystep = int(acceptreject() * step);
		//console.log(ystep);
		if (random([false, true])) {
			ystep *= -1;
		}
		this.x += xstep;
		this.y += ystep;
	}
}

function acceptreject() {
	while (true) {
		let r1 = random(1);

		let p = sqrt(r1);
		let r2 = random(1);

		console.log(r2, p);
		if (r2 < p) {
			return r1;
		}
	}
}
