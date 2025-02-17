function change() {
	var x = 0; var y = 0; var z = 0;
	var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
	console.log(thergb,document.body.style.background);
	document.body.style.background=thergb;
}

function change1() {
	var x = 255; var y = 255; var z = 255;
	var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
	console.log(thergb,document.body.style.background);
	document.body.style.background=thergb;
}
