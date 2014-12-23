/**
 * Created by Rory on 01/11/2014.
 */


$(function () {

   // $('#rootFrame').load('html_frames/artist_main.html');
    sizeRootFrame();
});

function sizeRootFrame() {

    var leftPane = document.getElementById("index_leftPane");
    var leftPaneWidth = $(leftPane).css('width');
    var mediaBarHeight = $('#mediaBar').css('height');
    var rootFrame = document.getElementById('rootFrame');
    $(rootFrame).css({
        'width': 'calc(100% - ' + leftPaneWidth,
        'left': leftPaneWidth,
        'height': 'calc(100% - ' + mediaBarHeight
    });
}