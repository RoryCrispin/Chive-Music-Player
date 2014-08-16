var isPlaying = false;

function playPauseButton() {
    if (isPlaying == false) {
        isPlaying = true;
        player.playVideo();
        playPauseSpan.className = "glyphicon glyphicon-pause playerControl";
    }  else {
        isPlaying = false;
        player.pauseVideo();
        playPauseSpan.className = "glyphicon glyphicon-play playerControl";
    }
}
function playSongButton() {
    player.playVideo();
}
function prevSongButton() {
    alert("prev");
}

function nextSongButton() {
    alert("next");
}
function stopVideo() {
    player.stopVideo();
}

function statePlaying(){
    
}