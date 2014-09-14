/**
 * Created by Rory on 14/09/2014.
 */
$(function() {
    lookupAlbum(artist, track, album)
});

function lookupAlbum(artist, track, album) {
    if(album != null) {
        albumFrame_lookupAlbum(album,artist,"albumFrameTable");
    } else {
        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=track.search&track="  + songName +"&api_key=5c14af2842949df6b7263aacc7ffffb1&format=json&limit=1",function(jsonResult){
            //  console.log(jsonResult.results.trackmatches);
            meta = {    "id"       : id,
                "title"    : jsonResult.results.trackmatches.track.name,
                "artist"   : jsonResult.results.trackmatches.track.artist,
                "cover0"   : jsonResult.results.trackmatches.track.image[0]['#text'],
                "cover1"   : jsonResult.results.trackmatches.track.image[1]['#text'],
                "cover2"   : jsonResult.results.trackmatches.track.image[2]['#text'],
                "cover3"   : jsonResult.results.trackmatches.track.image[3]['#text'],
                "explicit" :  checkExplicit(songName)
            };

            retLastFM_metaTrackArtist(meta);
        });

    }
}
function fillAlbumFrameTable(data) {

}

function albumFrame_lookupAlbum(album, artist){
    performAlbum_LFMSearch(album, artist, "albumFrameTable");
}