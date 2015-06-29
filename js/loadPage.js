/**
 * Created by Rory on 01/11/2014.
 */
var requestArtist;

$(function () {
    // $('#rootFrame').load('html_frames/artist_main.html');
    sizeRootFrame();
});
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

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

var app = angular.module('app', ['ngMaterial']);


app.controller('indexctrl', ['$scope', '$http',
    function ($scope) {
        $scope.playlists = [
            {name: "Chill", songCount: "30"},
            {name: "Chill", songCount: "31"}
        ]
    }
]).directive('rootFrame', function () {
    return {
        templateUrl: 'html_frames/artistPage/artist_main.html'
    };
}).directive('bio', function () {
    return {
        templateUrl: 'html_frames/artistPage/bio.html'
    };
});


