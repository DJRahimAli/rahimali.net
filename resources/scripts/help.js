const helpString = "help";
const helpStringLength = helpString.length;
let helpStringCurrent = "";

let helpkeyPressed = false;
let helped = false;

function createHelper() {
	let helperElement = document.createElement('div');
	helperElement.setAttribute("id", "helper");
	//helperElement.setAttribute("class", "slideInRight");
	helperElement.setAttribute("class", "prevent-select");
	helperElement.setAttribute("style", "position: fixed; right: 0px; bottom: 0px; filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.2)); animation: 0.6s ease-out forwards helperslideInRight, 0.6s ease-out 4s reverse forwards helperslideInRight;");
	//helperElement.style.position = "absolute";
	document.body.appendChild(helperElement);
	includeHelper();
}

function includeHelper() {
	document.getElementById("helper").innerHTML = '\
	\
<div class="tooltip" style="max-width: 240px; margin-right: 16px; margin-bottom: 2px;">\
	<p style="margin: 0px;">Why don&apos;t you click, drag and use keyboard arrows?</p>\
</div>\
<img style="display: flex; width: 248px; height: auto; float: right; image-rendering: auto;" src="https://static.wikia.nocookie.net/thecreaturecases/images/c/c0/Kit_Casey_Best_Picture.png">\
	\
	';
}

function getHelp() {
    if (!helped) {
		//wait until image loaded
		let tempImg = new Image();
		tempImg.onload = function() {
			createHelper();
			//console.log("helped");
		}
		tempImg.src = "https://static.wikia.nocookie.net/thecreaturecases/images/c/c0/Kit_Casey_Best_Picture.png";
    }
    helpkeyPressed = false;
    helped = true;
}

document.addEventListener('keydown', (event) => {
	if (!helped) {
		if (!helpkeyPressed && /^[A-Za-z]$/.test(event.key)) {
			helpStringCurrent += event.key;
			if (helpStringCurrent.length >= helpStringLength) {
				helpStringCurrent = helpStringCurrent.substring(helpStringCurrent.length - helpStringLength);
				if (helpStringCurrent.toLowerCase() == helpString) {
					getHelp();
				}
			}
			console.log(helpStringCurrent);
			//console.log('Key is down:', event.key);
			helpkeyPressed = true;
		}
	}
});

document.addEventListener('keyup', (event) => {
	if (!helped) {
		if (/^[A-Za-z]$/.test(event.key)) {
			//console.log('Key is up:', event.key);
			helpkeyPressed = false;
		}
	}
});
