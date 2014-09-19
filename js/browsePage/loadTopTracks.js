/**
 * Created by Rory on 04/09/2014.
 */

function performTopTrack_LFMSearch(){
    //console.log(songName);
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=5c14af2842949df6b7263aacc7ffffb1&format=json",function(jsonResult){
        //  console.log(jsonResult.results.trackmatches);
        retLastFM_topTracks(jsonResult);
    });
}

function retLastFM_topTracks(jsonResult) {
    for(var i = 0; i<6;i++) {
        console.log(jsonResult.tracks.track[i].name);
    }
}
