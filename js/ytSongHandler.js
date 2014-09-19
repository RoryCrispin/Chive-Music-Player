/**
 * Created by Rory on 14/09/2014.
 */
var albumData;
function searchSong_yt (query, callbackId,data, index) {
    // https://www.googleapis.com/youtube/v3/search?part=snippet&q=Kanye+West+Blood+on+the+leaves&key={YOUR_API_KEY}
    $.getJSON("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=AIzaSyAaaLTueWV9tFju-k7sGcZruO27-1R3sus&q=" + query,
        function(jsonResult){
            var ytSong = {
                "title" : jsonResult.items[0].snippet.title,
                "id"    : jsonResult.items[0].id.videoId
            };
            searchSong_ytCallback(callbackId, ytSong, data, index);

        });
}
function searchSong_ytCallback(callbackId, ytSong, data, index) {
    console.log(ytSong.id);
    switch (callbackId) {
        case "albumTable":
            data.tracks[index][2] = ytSong.id;
            albumData = data;

            if(albumSize == 1) {
                console.log("done");
                fillAlbumFrameTable(albumData);
            } else {
                albumSize--;
                console.log(albumSize);
            }


            break;
    }
}