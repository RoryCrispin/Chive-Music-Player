/**
 * Created by Rory on 01/11/2014.
 */

function filterAlbumAPI(data) {
    var album = new Array();
    var albumIncrement = 0;

    console.log(data.length)
    for (i = 0; i <= data.length; i++) {
        try {
            if (data[i]['secondary-types'] == "") {

                album[albumIncrement] = data[i];
                albumIncrement++;
            }
        } catch (error) {

        }


    }
    return album;
}

function getAlbumInfo(albumData, artistName, $http) {
    var fullAlbumInfo = new Array();
    var incc = 0;
    for (i = 0; i < albumData.length; i++) {
        $http.get('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=5c14af2842949df6b7263aacc7ffffb1&artist=' + artistName + '&album=' + albumData[i].title + '&format=json').
            success(function (data, status, headers, config) {
                fullAlbumInfo[incc] = data.album;
                incc++;
            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    }
    return fullAlbumInfo;
}


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

var app = angular.module('app', [])

app.controller('indexctrl', ['$scope', '$http',
    function ($scope) {
    }
]).directive('rootFrame', function () {
    return {
        templateUrl: 'html_frames/artist_main.html'
    };
});


app.controller('artistFrame', ['$scope', '$http',
    function ($scope, $http) {
        var requestArtist = "Britney Spears";
        var artist = {
            name: "",
            similar: "",
            mbid: "",
            topTracks: []};

        $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + requestArtist + '&api_key=5c14af2842949df6b7263aacc7ffffb1&format=json').
            success(function (getInfo_data, status, headers, config) {
                console.log(getInfo_data);
                artist.similar = getInfo_data.artist.similar.artist;
                artist.name = getInfo_data.artist.name;
                artist.mbid = getInfo_data.artist.mbid;


                // Simple GET request example :
                $http.get('http://www.musicbrainz.org/ws/2/release-group?artist=' + artist.mbid + '&type=album&fmt=json').
                    success(function (data, status, headers, config) {
                        var albumData = filterAlbumAPI(data['release-groups']);
                        $scope.albums = getAlbumInfo(albumData, requestArtist, $http);


                    }).
                    error(function (data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });


            }).
            error(function (data, status, headers, config) {

            });
        $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + requestArtist + '&api_key=5c14af2842949df6b7263aacc7ffffb1&format=json&limit=5').
            success(function (topTracks_data, status, headers, config) {
                artist.topTracks = topTracks_data.toptracks;

                console.log(topTracks_data.topTracks);
                $scope.artist = artist;
                console.log(artist);
            }).
            error(function (data, status, headers, config) {

            });


    }
]);