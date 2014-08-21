function cleanSongNameFor_LFMSearch(trackName){

    return (trackName.replace(/ *\([^)]*\) */g, "").replace("cover", "").replace("remix", ""));
}
function checkRemix(trackName){
    if (trackName.toLowerCase().indexOf("remix") > -1 ) {
        return true;
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
        return true;
    } else {
        return false;
    }
}

function performSong_LFMSearch(songName){
    //console.log(songName);
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=track.search&track="  + songName +"&api_key=5c14af2842949df6b7263aacc7ffffb1&format=json",function(result){
        var res = [result.results.trackmatches.track[0].name, result.results.trackmatches.track[0].artist];

        appendTableMetadata(res)
    });
}

function call_LFMSearch(trackName){
    performSong_LFMSearch(trackName);
}
function appendTableMetadata(results){
    console.log(results[0]);
    console.log(results[1]);
}
function  fetchMeta_YTTitle(title){
    performSong_LFMSearch(cleanSongNameFor_LFMSearch(title));

}