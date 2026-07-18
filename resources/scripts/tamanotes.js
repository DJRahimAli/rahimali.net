//TamaNotes, created by Rahim Ali https://rahimali.net

//Import sounds
let SOUNDS = {};

let audioContext = new AudioContext();

function loadSound(name,success,err) {
	let request = new XMLHttpRequest();
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
	let s = SOUNDS[name];
	let source = audioContext.createBufferSource();
	source.buffer = s;
	if (param.loop) {
		source.loop = true;
	}

	source.connect(audioContext.destination);
	source.detune.value = pitch;
	source.start(0);
}

let soundName = "flute";
loadSound(soundName);

//Keys
let keys = false;

document.addEventListener("click", event => {
    keys = true;
});

document.addEventListener('keydown', (event) => {
	if (event.repeat) return;
	if (!keys) return;
	if (event.key.startsWith("Arrow")) {
		event.preventDefault();
		switch(event.key) {
			case "ArrowUp":
				playSound(soundName, -100);
				break;
			case "ArrowDown":
				playSound(soundName, -500);
				break;
			case "ArrowLeft":
				playSound(soundName, -300);
				break;
			case "ArrowRight":
				playSound(soundName, 200);
				break;
		}
	}
});
