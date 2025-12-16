function removeSpaces(x) {
	return x.replace(/\s/g, '');
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

// Get current path.
var get_path = function() {
	var loc = location,
		c = document.querySelector('link[rel="canonical"][href]')
	if (c) {  // May be relative or point to different domain.
		var a = document.createElement('a')
		a.href = c.href
		if (a.hostname.replace(/^www\./, '') === location.hostname.replace(/^www\./, ''))
			loc = a
	}
	return (loc.pathname + loc.search) || '/'
}

//visitor counter text before the json is loaded
document.querySelector('#stats').innerText = "........"

let r = new XMLHttpRequest();
r.addEventListener('load', function() {
	document.querySelector('#stats').innerText = numberWithCommas(removeSpaces(JSON.parse(this.responseText).count));
})

// Should be exact (encoded) path as it appears in the UI. This uses
// GoatCounter's count.js
//let path = window.goatcounter.get_data()['p']

let path = get_path()

// Or alternatively, do it manually. Will return HTTP status 404 if the
// path is not found).
//let path = location.pathname

r.open('GET', 'https://counter.rahimali.net/counter/' + encodeURIComponent(path) + '.json')
r.send()
