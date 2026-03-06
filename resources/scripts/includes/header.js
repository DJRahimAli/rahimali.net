function includeHeader() {
	document.getElementById("header").innerHTML = '\
	\
<div style="margin-top: 8px;">\
	<img src="/assets/images/style/sLogo.png" class="prevent-select logo">\
	<!-- Navigation bar -->\
	<div class="prevent-select navbar">\
		<a href="/">Home</a>\
		<a href="/blog">Blog</a>\
		<div class="navbarDropdown">\
			<button class="navbarDropdown-Button" style="padding-left: 0px; padding-right: 0px;">\
				<a href="/gallery">Gallery</a>\
			</button>\
			<div class="navbarDropdown-Content">\
				<a href="/gallery/art">Art</a>\
			<hr class="nav">\
				<a href="/gallery/games">Games</a>\
			<hr class="nav">\
				<a href="/gallery/music">Music</a>\
			</div>\
		</div>\
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
