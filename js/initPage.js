
function getURLpramWithName(name) {
var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getRootPram(){
	if(getURLpramWithName("search") != null) {
		console.log("Search pram");
	}
}
function demoPlaylist(){
    var ytPlaylistID = getURLpramWithName("ytplaylist")
    if (ytPlaylistID != null){
        return ytPlaylistID;
    } else {
        return "PL9tY0BWXOZFvWi6WNdcokF_YvXUxyESRW"
        //window.location.replace("?ytplaylist=PL9tY0BWXOZFvWi6WNdcokF_YvXUxyESRW");

    }
}
