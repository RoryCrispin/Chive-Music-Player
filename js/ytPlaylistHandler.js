
function ytGetPlaylist(playlistId){
    ytGetPlaylistItems(playlistId);
    ytGetPlaylistMeta(playlistId);
}
function ytGetPlaylistItems(playlistId){
    console.log(playlistId);
    $.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + playlistId +"&key=AIzaSyAaaLTueWV9tFju-k7sGcZruO27-1R3sus",
        function(jsonResult){
            console.log(jsonResult);
            for (var i = 0; i< 49; i++) {
                // console.log(jsonResult.items[i].id);
                var currentYtItem = jsonResult.items[i].snippet;
                if (currentYtItem.title != "Deleted video") {
                    fillTableWithPlaylist(currentYtItem.title, currentYtItem.resourceId.videoId);
                } else {
                    console.log("found undefined item");
                }
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

function fillTableWithPlaylist(title, id) {
    //$("#songListTitle").append("<tr class='ripplex' id='" +id +"'><td>" + title+ "</td><td>3:00</td><td>214,641</td></tr>");
    //  <a href="#" class="list-group-item active playerlist">Cras justo odio </a>

    if (fetchMetaForYTSongs) {
        fetchMeta_YTTitle(title, id);

    } else {
        appendToMainTable(id,title,null,null);
    }
}




//THIS BELOW HERE DOES LASTFM SHIZZLE
/***********************************

 $( document ).ready(function() {

    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=track.search&track=do%20i%20wanna&api_key=5c14af2842949df6b7263aacc7ffffb1&format=json",function(xmlResult){
        for(var i = 0; i<4; i++){

         console.log(xmlResult.results.trackmatches.track[i].name + " -- " + xmlResult.results.trackmatches.track[i].artist);
            console.log(xmlResult.results.trackmatches.track[i].image[2]['#text']);
        }

 });

});
 */
