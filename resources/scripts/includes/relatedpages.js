const relatedpagesLength = relatedpages.length;

var htmlString = '<a href="' + relatedpages[0][0] + '">' + relatedpages[0][1] + '</a>'

// add more relatedpages to the htmlString if there are more than one in the array (var i = 1;)
for (var i = 1; i < relatedpagesLength; i++) {
	htmlString += ', <a href="' + relatedpages[i][0] + '">' + relatedpages[i][1] + '</a>'
}

document.write('<div class="prevent-select box" style="margin-top: 0px;">\
	<h2>Related pages:</h2>\
	<div class="content-box"><p style="margin: 0px;">' + htmlString + '</p></div>\
</div>');
