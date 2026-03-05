function includeRelatedPages(relatedpages = [ ["Unset", "NameUnset", undefined] ]) {
	const relatedpagesLength = relatedpages.length;

	var htmlString = '<a href="' + relatedpages[0][0] + '">' + relatedpages[0][1];
	if (relatedpages[0][2] == undefined) {
		htmlString += '</a>';
	}
	else {
		htmlString += ' <i class="' + relatedpages[0][2] + '" style="color: white;"></i></a>';
	}

	// add more relatedpages to the htmlString if there are more than one in the array (var i = 1;)
	for (var i = 1; i < relatedpagesLength; i++) {
		htmlString += ', <a href="' + relatedpages[i][0] + '">' + relatedpages[i][1];
		if (relatedpages[i][2] == undefined) {
			htmlString += '</a>';
		}
		else {
			htmlString += ' <i class="' + relatedpages[i][2] + '" style="color: white;"></i></a>';
		}
	}

	document.getElementById("relatedpages").innerHTML = '\
	\
<div class="prevent-select box" style="margin-bottom: 8px;">\
	<a class="heading" href="#relatedpages">\
		<h2>Related pages:</h2>\
	</a>\
	<div class="content-box"><p style="margin: 0px;">' + htmlString + '</p></div>\
</div>\
	\
	';
}

//function call commented out so it can be called elsewhere for the parameters to be changed
//includeRelatedPages();
