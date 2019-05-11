function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		//The maximum is inclusive and the minimum is inclusive
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
//to give random color gradient background
let color1 = '#'+(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6);
let color2 = '#'+(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6);
let color3 = '#'+(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6);
direction = getRandomIntInclusive(0, 360);
document.querySelector('body').style.backgroundImage =
		"repeating-linear-gradient(" + direction + "deg , " + color1 + ", " + color2 + ", " + color3 + ")";
//color to links
document.querySelectorAll('article a').forEach(function(a) {
		a.style.color = color1;
});
