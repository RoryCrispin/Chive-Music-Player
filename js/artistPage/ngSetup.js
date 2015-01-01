/**
 * Created by Rory on 23/12/2014.
 */


var artist = {
    name: "", //RequestName of the artist
    shortSimilar: [], // API call to fetch 5 similar artists
    fullSimilar: [], // API call to fetch {MORE} similar artists for the 'Related' page
    mbid: "",
    cover: "",
    topTracks: [],
    albums: [],
    biography: []
};


app.controller('artistFrame', ['$scope', '$http',


    function ($scope, $http) {
        requestArtist = getParameterByName("artist");


        $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + requestArtist + '&api_key=5c14af2842949df6b7263aacc7ffffb1&format=json').
            success(function (getInfo_data, status, headers, config) {


                artist.biography = getInfo_data.artist.bio.content;
                artist.similar = getInfo_data.artist.similar.artist;
                artist.name = getInfo_data.artist.name;
                artist.mbid = getInfo_data.artist.mbid;
                artist.cover = getInfo_data.artist.image[4]['#text'];
                $scope.artist = artist;

                // Simple GET request example :
                $http.get('http://www.musicbrainz.org/ws/2/release-group?artist=' + artist.mbid + '&type=album&fmt=json').
                    success(function (data, status, headers, config) {
                        var albumData = filterAlbumAPI(data['release-groups']);
                        fullAlbumInfo = getAlbumInfo(albumData, requestArtist, $http, $scope);
                        // This ^^^^ returns to the scope inside the function, no need for a return TODO tidy
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
                $scope.artist = artist;
            }).
            error(function (data, status, headers, config) {
            });
    }
]);