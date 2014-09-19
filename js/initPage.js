
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
function getFramePram(){
    switch(getURLpramWithName("frame")){


        case "ytPlaylist":
            $('.container-fluid').load('html_frames/frame_ytPlaylist.html');
            break;
        case "album":
            $('.container-fluid').load('html_frames/frame_albumTable.html');
            break;
        case "home":
            $('.container-fluid').load('html_frames/frame_home.html');
         break;
         case "search":
            $('.container-fluid').load('html_frames/frame_search.html');
         break;
    }

}

$(function() {
    console.log("ready");
    getFramePram();
});
