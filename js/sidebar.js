$("#searchInput").keyup(function(event){
    if(event.keyCode == 13){
       alert("s");
    }
});
function sidebar_homeClick(){

    $('.container-fluid').load('html_frames/frame_home.html');
}