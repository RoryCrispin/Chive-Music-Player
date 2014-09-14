function cleanSongNameFor_LFMSearch(trackName){

    return (trackName.replace(/ *\([^)]*\) */g, "").replace("cover", "").replace("remix", "").replace(/ *\[[^)]*\] */g, "").replace("[^a-zA-Z0-9 -]", ""));
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
 appendToMainTable(meta.id, meta.title, meta.artist, meta.album, meta.cover0, meta.explicit);
}

function performDetails_LFMSearch(songName, artist) {
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=5c14af2842949df6b7263aacc7ffffb1&format=json&artist=" + artist +"&track=" + songName ,function(jsonResult){
        details = {
            "title"     : jsonResult.track.name,
            "artist"    : jsonResult.track.artist.name,
            "playCount" : jsonResult.track.playcount,
            "duration"  : jsonResult.track.duration,
            "album"     : jsonResult.track.album.title,
            "tag0"      : jsonResult.track.toptags.tag[0].name,
            "tag1"      : jsonResult.track.toptags.tag[1].name,
            "tag2"      : jsonResult.track.toptags.tag[2].name
        };

    console.log(details);
    });

}
function getAlbumArt(meta) {
    if (meta.cover0 != "") {
        console.log("found extralarge");
        console.log(meta.cover0);
        $('#pic').css("background-image", "url('" + meta.cover0 + "')");
    } else {
        console.log("null");
    }
}

function performAlbum_LFMSearch(album, artist, callbackID){
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=5c14af2842949df6b7263aacc7ffffb1&format=json&artist="+ artist +"&album="+ album ,function(jsonResult){
        var tracks = [];
        $.each(jsonResult.album.tracks.track, function() {
            tracks.push([cleanSongNameFor_LFMSearch(this.name),this.duration]);
        });
        console.log(tracks);
        albumDetails = {    "tracks"      : tracks,
            "artist"      : jsonResult.album.artist,
            "releaseDate" : cleanLfmDate(jsonResult.album.releasedate),
            "release"     : jsonResult.album.name,
            "cover0"      : jsonResult.album.image[0]['#text'],
            "cover1"      : jsonResult.album.image[1]['#text'],
            "cover2"      : jsonResult.album.image[2]['#text'],
            "cover3"      : jsonResult.album.image[3]['#text'],
            "cover4"      : jsonResult.album.image[4]['#text'],
            "summary"     :  jsonResult.album.wiki.summary,
            "content"     :  jsonResult.album.wiki.content
        };

        handleCallback(callbackID, albumDetails);
    });
}

function handleCallback(callbackID, data){
switch(callbackID) {
    case "albumFrameTable":
        //fillAlbumFrameTable(data);
        getYtSongId_lfmAlbumSearch (data);
        break;
}
}
function cleanLfmDuration(duration) {
    if (duration < 10000){
        var minutes = Math.floor(duration / 60);
        var seconds = duration - minutes * 60;
        return minutes + ":" + padDigit(seconds);
    } else {
        minutes = (duration/1000/60) << 0,
            seconds = (duration/1000) % 60;
        return minutes + ":" + padDigit(Math.round(seconds));
    }
}
function padDigit(seconds) {
    if (seconds < 10){
       return "0" + seconds;
    } else {
        return seconds;
    }
}
function cleanLfmDate(date) {
    return /[0-9]{4}/.exec(date);
}
var albumSize;
function getYtSongId_lfmAlbumSearch (data){
    albumSize = data.tracks.length;
    $.each(data.tracks, function(index) {

       //console.log(this[0] + " " + data.artist);
       searchSong_yt(this[0] + " " + data.artist,"albumTable", data, index);

    });
    fillAlbumFrameTable(albumData);
}
