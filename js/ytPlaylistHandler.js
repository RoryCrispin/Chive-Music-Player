function ytGetPlaylist(playlistId){
	$.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + playlistId +"&key=AIzaSyAaaLTueWV9tFju-k7sGcZruO27-1R3sus", 
		function(jsonResult){
            console.log(jsonResult);
            for (var i = 0; i< 50; i++) {
               // console.log(jsonResult.items[i].id);
                fillTableWithPlaylist(jsonResult.items[i].snippet.title, jsonResult.items[i].snippet.resourceId.videoId);
 }
makePlaylistClickable();
});

}

function fillTableWithPlaylist(title, id){
	$("#songListTitle").append("<tr id='" +id +"'><td>" + title+ "</td><td>3:00</td><td>214,641</td></tr>");

}