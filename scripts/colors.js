function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		//The maximum is inclusive and the minimum is inclusive
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
//to give random color gradient background
let colors = [];
for (var i = 0, len = 2; i < len; i++) {
	colors[i] = '#'+(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6);
}
direction = getRandomIntInclusive(0, 360);
document.querySelector('body').style.backgroundImage =
		"repeating-linear-gradient(" + direction + "deg, "
		+ colors[0] + ", " + colors[1] + ")";
//color to links
document.querySelectorAll('article a').forEach(function(a) {
		a.style.color = colors[1];
});
