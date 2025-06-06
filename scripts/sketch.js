// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let DEFAULT_SIZE = 948;
let W = window.innerWidth;
let H = window.innerHeight;
let DIM;
let MULTIPLIER;

let Walker = class {
	constructor(hue, saturation, brightness) {
		this.x = width / 2;
		this.y = height / 2;
		this.speed = random(20, 60);
		this.hue = hue;
		this.saturation = saturation;
		this.brightness = brightness;
	}

	update() {
		this.x += random(-this.speed / 1.2, this.speed);
		this.y += random(-this.speed / 1.2, this.speed);

		if (this.x > width + this.speed) {
			this.x = -this.speed;
		}
		if (this.x < -this.speed) {
			this.x = width + this.speed;
		}
		if (this.y > height + this.speed) {
			this.y = -this.speed;
		}
		if (this.y < -this.speed) {
			this.y = height + this.speed;
		}
	}

	show() {
		stroke(this.hue, this.saturation, this.brightness);
		fill(this.hue + 170, this.saturation + 20, this.brightness - 40);
		strokeWeight(this.speed / 6);
		ellipse(this.x, this.y, this.speed * 4, this.speed * 4);
	}
};

let walker;
function setup() {
	DIM = min(windowWidth, windowHeight);
	MULTIPLIER = DIM / DEFAULT_SIZE;
	c = createCanvas(DIM, DIM * 1.33);
	colorMode(HSB);
	pixelDensity(5);
	background(10, 10, 100);

	walker = new Walker(10, 10, 100);
}

function draw() {
	walker.update();
	walker.show();
}
