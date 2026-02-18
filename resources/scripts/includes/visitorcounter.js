function includeVisitorCounter() {
	document.getElementById("visitorcounter").innerHTML = '\
	\
<div class="box" style="margin-top: 0px;">\
	<a class="heading" href="#visitorcounter">\
		<h2 class="prevent-select">Total page views:</h2>\
	</a>\
	<div class="content-box">\
		<p id="stats" style="margin: 2px 0px;"></p>\
	</div>\
</div>\
	\
	';
}

includeVisitorCounter();
