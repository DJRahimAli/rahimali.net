function includeHeader() {
	document.getElementById("header").innerHTML = '\
	\
<div style="margin-top: 8px;">\
	<img src="/assets/images/style/sLogo.png" class="prevent-select logo">\
	<!-- Navigation bar -->\
	<div class="prevent-select navbar">\
		<a href="/">Home</a>\
		<div class="navbarDropdown">\
			<button class="navbarDropdown-Button">\
				Gallery <i class="fa fa-angle-down"></i>\
			</button>\
			<div class="navbarDropdown-Content">\
				<a id="ninButton" href="/gallery">Everything</a>\
			<hr class="nav">\
				<a href="/gallery/art">Art</a>\
			<hr class="nav">\
				<a href="/gallery/games">Games</a>\
			<hr class="nav">\
				<a href="/gallery/music">Music</a>\
			</div>\
		</div>\
		<a href="/blog">Blog</a>\
		<a href="/about">About</a>\
		<div class="navbarDropdown">\
			<button class="navbarDropdown-Button">\
				Misc <i class="fa fa-angle-down"></i>\
			</button>\
			<div class="navbarDropdown-Content">\
				<a href="/portfolio">Portfolio</a>\
			<hr class="nav">\
				<a href="https://legacy.rahimali.net">Legacy Site</a>\
			</div>\
		</div>\
	</div>\
</div>\
	\
	';
}

includeHeader();

let btn = document.getElementById("ninButton");
let btnHover = false;
const btnNotes = [
	[-400, 3],
	[-600, 2],
	[-700, 2],
	[-900, 2],
	[-1100, 3],
	[-900, 3],
	[-1100, 2],
	[-1200, 2],
	[-1400, 2],
	[-1600, 2],//
	[-400, 3],
	[-600, 2],
	[-700, 2],
	[-900, 2],
	[-1100, 2],
	[-1200, 1],
	[-1100, 1],
	[-1200, 2],
	[-1200, 11]//
];
let btnNotesCurrent = [0, btnNotes[0][1]];
//console.log(btnNotesCurrent);
loadSound("button");

function progressNotesCurrent() {
	//console.log(btnNotesCurrent);
	btnNotesCurrent[1]--;
	if (btnNotesCurrent[1] == 0) {
		btnNotesCurrent[0]++;
		btnNotesCurrent[0] = btnNotesCurrent[0] % (btnNotes.length);
		btnNotesCurrent[1] = btnNotes[ btnNotesCurrent[0] ][1];
	}
	//console.log(btnNotesCurrent);
}

btn.addEventListener("mouseover", function() {
    if (btnHover) return;
	if (!keys) return;
	playSound("button", btnNotes[ btnNotesCurrent[0] ][0]);
	progressNotesCurrent()
	btnHover = true;
});

btn.addEventListener("mouseout", function() {
	btnHover = false;
});
