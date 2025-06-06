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

	let card_num = 4;
	let total_cards = 52;

	let probability = (iterations, reshuffle = true) => {
		if (reshuffle) {
			// With replacement: same probability each time
			return (card_num / total_cards) ** iterations;
		} else {
			// Without replacement: probability changes with each draw
			let prob = 1;
			let remaining_cards = total_cards;
			let remaining_desired = card_num;

			for (let i = 0; i < iterations; i++) {
				prob *= remaining_desired / remaining_cards;
				remaining_desired -= 1;
				remaining_cards -= 1;
			}
			return prob;
		}
	};

	let final_probability = probability(2, false);

	// center the text
	fill(0);
	textSize(width / 15);
	textAlign(CENTER, CENTER);
	text(final_probability, width / 2, height / 2);
}

function draw() {
	// show text
}
