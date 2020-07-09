// DOM Manipulation
const audio1 = document.getElementById('s1');
const audio2 = document.getElementById('s2');
const bpm = document.getElementById('bpm');
const play = document.getElementById('play');
var bpmValue = document.getElementById('rangeValue');

// Set initial values
let beatsPerMeasure = 4;
let count = 0;
let currentBpm = 60;
let isPlaying = false;
let timer = null;

// Function that changes slider's value (bpm) as it is moved
function rangeSlider(value) {
	bpmValue.innerHTML = value;
}

// Function that plays the sound stating @ second zero
function tick() {
	if (count % beatsPerMeasure === 0) {
		audio1.play();
	} else {
		audio2.play();
	}
	count ++
};

// Event listener for slider
bpm.addEventListener('change', function() {
	bpmValue.innerHTML = this.value;
	currentBpm = parseInt(this.value);
	if (isPlaying) {
		clearInterval(timer);
		timer = setInterval(tick, ((60 * 1000) / currentBpm));
	};
});

// Event listener for button
play.addEventListener('click', function() {
	if (isPlaying) {
		play.innerHTML = 'Play';
		play.style.backgroundColor = "#52D017";
		play.style.border = "1px solid #32CD32";
		clearInterval(timer);
	} else {
		play.innerHTML = 'Stop';
		play.style.backgroundColor = "#FF2400";
		play.style.border = "1px solid #8B0000";
		tick();
		timer = setInterval(tick, (60 * 1000) / currentBpm);
	};
	isPlaying = !isPlaying;
});