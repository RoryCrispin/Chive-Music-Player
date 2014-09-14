/**
 * Created by Rory on 14/09/2014.
 */
function searchSong_yt (query) {
    // https://www.googleapis.com/youtube/v3/search?part=snippet&q=Kanye+West+Blood+on+the+leaves&key={YOUR_API_KEY}
    $.getJSON("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=AIzaSyAaaLTueWV9tFju-k7sGcZruO27-1R3sus&q=" + query,
        function(jsonResult){
           console.log(jsonResult);
        });
}