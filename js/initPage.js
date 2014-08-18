
function getURLpramWithName(name) {
var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getRootPram(){
	if(getURLpramWithName("search") != null) {
		console.log("Search pram");
	}
}