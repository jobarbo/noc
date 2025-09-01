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
	colorMode(OKLCH, 100, 100, 360, 100);
	background(40, 5, 35);

	for (let i = 0; i < 10; i++) {
		walker = new Walker(width / 2, height / 2, 1);
		walkers.push(walker);
	}
}

function draw() {
	for (let i = 0; i < walkers.length; i++) {
		walkers[i].display();
		walkers[i].move();
	}
}

class Walker {
	constructor(x, y, step_size) {
		this.x = x;
		this.y = y;
		this.prevX = x;
		this.prevY = y;
		this.step_size = step_size;
		this.size = 120;
		this.choices = ["up", "down", "left", "right"];
		this.choice = random(this.choices);
		console.log(this.choice);
	}

	display() {
		strokeWeight(0.5);
		stroke(100, 0, 355, 100);
		line(this.prevX, this.prevY, this.x, this.y);
	}

	move() {
		this.step_size = abs(randomGaussian(15, 15));
		this.choice = random(["up", "down", "left", "right"]);
		this.prevX = this.x;
		this.prevY = this.y;
		switch (this.choice) {
			case "up":
				this.y -= this.step_size;
				this.y = constrain(this.y, this.size, height - this.size);
				break;
			case "down":
				this.y += this.step_size;
				this.y = constrain(this.y, this.size, height - this.size);
				break;
			case "left":
				this.x -= this.step_size;
				this.x = constrain(this.x, this.size, width - this.size);
				break;
			case "right":
				this.x += this.step_size;
				this.x = constrain(this.x, this.size, width - this.size);
				break;
		}
	}
}
