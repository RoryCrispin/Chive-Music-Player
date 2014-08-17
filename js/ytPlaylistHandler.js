
function ytGetPlaylist(playlistId){
	 ytGetPlaylistItems(playlistId);
	 ytGetPlaylistMeta(playlistId);
}
function ytGetPlaylistItems(playlistId){
	$.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + playlistId +"&key=AIzaSyAaaLTueWV9tFju-k7sGcZruO27-1R3sus", 
		function(jsonResult){
            console.log(jsonResult);
            for (var i = 0; i< 50; i++) {
               // console.log(jsonResult.items[i].id);

                fillTableWithPlaylist(jsonResult.items[i].snippet.title, jsonResult.items[i].snippet.resourceId.videoId);
 }
refreshTableGlyphs();

});

}

function ytGetPlaylistMeta(playlistId){
	$.getJSON("https://www.googleapis.com/youtube/v3/playlists?part=snippet&id= " + playlistId+ "&key=AIzaSyAaaLTueWV9tFju-k7sGcZruO27-1R3sus",function(jsonResult){
         console.log(jsonResult.items[0].snippet.title);
         setJumbotronText(jsonResult.items[0].snippet.title);
 });
}

function fillTableWithPlaylist(title, id){
	//$("#songListTitle").append("<tr class='ripplex' id='" +id +"'><td>" + title+ "</td><td>3:00</td><td>214,641</td></tr>");
	//  <a href="#" class="list-group-item active playerlist">Cras justo odio </a>
	$("#playgroup").append(" <a id='" +id +"' class='list-group-item ripplex playerlist'>"+title+"</a>");
}