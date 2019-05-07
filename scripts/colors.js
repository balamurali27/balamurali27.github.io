//to give random color gradient background
let color1 = '#'+(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6);
let color2 = '#'+(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6);
// TODO: try random direction too <08-05-19, Balamurali M> //
// 0 to 360deg
document.querySelector('body').style.backgroundImage = 
	"linear-gradient(to bottom right, " + color1 + "," + color2 + ")";
//color to links
document.querySelectorAll('article a').forEach(function(a) {
	a.style.color = color1;
});
// document.querySelectorAll('h1, h2').forEach(function(heading) {
	// heading.style.borderBottomColor = color2;
// });
