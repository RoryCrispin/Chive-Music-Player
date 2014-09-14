function cleanSongNameFor_LFMSearch(trackName){

    return (trackName.replace(/ *\([^)]*\) */g, "").replace("cover", "").replace("remix", "").replace(/ *\[[^)]*\] */g, ""));
}
function checkRemix(trackName){
    if (trackName.toLowerCase().indexOf("remix") > -1 ) {
        return "";
    } else {
        return false;
    }
}
function checkCover(trackName){
    if (trackName.toLowerCase().indexOf("cover") > -1 ) {
        return true;
    } else {
        return false;
    }
}
function checkExplicit(trackName){
    if (trackName.toLowerCase().indexOf("explicit") > -1 ) {
        return "<span class='explicit glyphicon glyphicon-flag' title='Explicit'></span>";
    } else {
        return "";
    }
}

function performSong_LFMSearch(songName, id){
    //console.log(songName);
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
function  fetchMeta_YTTitle(title, id){
    performSong_LFMSearch(cleanSongNameFor_LFMSearch(title), id);
}

function retLastFM_metaTrackArtist(meta) {
    //Not getting album yet
    appendTableMetadata(meta);
}
function appendTableMetadata(meta){
 appendToMainTable(meta.id,meta.title,meta.album,meta.artist,meta.cover0,meta.explicit);
}