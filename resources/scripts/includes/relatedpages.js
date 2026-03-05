function includeRelatedPages(relatedpages = [ ["Unset", "NameUnset", undefined] ]) {
	const relatedpagesLength = relatedpages.length;

	let htmlString = '';
	
	for (let i = 0; i < relatedpagesLength; i++) {
		if (i > 0) htmlString += ', ';
		htmlString += '<a href="' + relatedpages[i][0] + '">' + relatedpages[i][1];

		htmlString = (relatedpages[i][2] == undefined) ? htmlString + '</a>'
		: htmlString + ' <i class="' + relatedpages[i][2] + '" style="color: white;"></i></a>';
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
