
var html = '<a href="index.html"><h3></h3></a>';


var section1 = ['Home', 'Blog', 'Projects', 'Links', 'Contact']
html += '<p> Site Navigation </p>'
html += '<p> <a href="index.html">Home</a></p>'
for (i = 1; i<section1.length; i++){
	html += '<p> <a href="' + section1[i] + '.html">' + section1[i] + '</a></p>'
}

document.getElementById("sidebar").innerHTML = html;
