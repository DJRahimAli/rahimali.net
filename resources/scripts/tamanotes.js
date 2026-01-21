//TamaNotes, created by Rahim Ali https://rahimali.net

//Import sounds
var SOUNDS = {};

var audioContext = new AudioContext();

function loadSound(name,success,err) {
	var request = new XMLHttpRequest();
	request.open('GET', '/assets/sounds/'+name+'.wav');
	request.responseType = 'arraybuffer';
	request.onload = function() {
		audioContext.decodeAudioData(request.response, function(buffer) {
			SOUNDS[name] = buffer;
			(success || (function(){}))()
		}, err || function(msg) {console.error(msg)});
	}
	request.send();
}

function playSound(name, pitch = 0, param) {
	param = param || {};
	var s = SOUNDS[name];
	var source = audioContext.createBufferSource();
	source.buffer = s;
	if (param.loop) {
		source.loop = true;
	}

	source.connect(audioContext.destination);
	source.detune.value = pitch;
	source.start(0);
}

var soundName = "flute";
loadSound(soundName);

//Keys
var keys = false;

var pressed = [
	[0, 0, 0, 0]
];

document.addEventListener("click", event => {
    keys = true;
});

document.addEventListener("keydown", event => {
	if (event.key.startsWith("Arrow") && keys) {
		event.preventDefault();
		switch(event.key) {
			case "ArrowUp":
				if (!pressed[0]) {
					playSound(soundName, -100);
					pressed[0] = 1;
				}
				break;
			case "ArrowDown":
				if (!pressed[1]) {
					playSound(soundName, -500);
					pressed[1] = 1;
				}
				break;
			case "ArrowLeft":
				if (!pressed[2]) {
					playSound(soundName, -300);
					pressed[2] = 1;
				}
				break;
			case "ArrowRight":
				if (!pressed[3]) {
					playSound(soundName, 200);
					pressed[3] = 1;
				}
				break;
		}
	}
});

document.addEventListener("keyup", event => {
	if (event.key.startsWith("Arrow")) {
		event.preventDefault();
		switch(event.key) {
			case "ArrowUp":
				if (pressed[0]) {
					pressed[0] = 0;
				}
				break;
			case "ArrowDown":
				if (pressed[1]) {
					pressed[1] = 0;
				}
				break;
			case "ArrowLeft":
				if (pressed[2]) {
					pressed[2] = 0;
				}
				break;
			case "ArrowRight":
				if (pressed[3]) {
					pressed[3] = 0;
				}
				break;
		}
	}
});
