
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        playerVars: {
            controls: 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
            'onError': onError

        }
    });
}

function ytLoadVideo(id){
   player.loadVideoById(id);
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    //event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        statePlaying(true);
    } else if (event.data == YT.PlayerState.PAUSED && !done){
        statePlaying(false);
    }
}

function onError(errorCode){
    if(errorCode == 101 || errorCode == 105){
        ytVideoBlocked();
    }
}


function ytVideoBlocked(){
    //TODO: blockedVideo

    //Check title of video for remix ect.


    //Search videos api


    //Create API of results, count them 

    //for count

    //check for remix ect

    //Try a video, nested call

    //hold for called id, if blocked try next for loop.

}
