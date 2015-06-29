/**
 * Created by Rory on 30/12/2014.
 */


function filterAlbumAPI(data) {
    var album = new Array();
    var albumIncrement = 0;

    console.log(data.length);
    for (i = 0; i <= data.length; i++) {
        try {
            if (data[i]['secondary-types'] == "") {

                album[albumIncrement] = data[i];
                albumIncrement++;
            }
        } catch (error) {

        }


    }

    console.log (album);
    return album;
}

function getAlbumInfo(albumData, artistName, $http, $scope) {
    //var fullAlbumInfo = [];
    var sorted = [];

    var ic = 0;
    for (i = 0; i < albumData.length; i++) {
        $http.get('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=5c14af2842949df6b7263aacc7ffffb1&artist=' + artistName + '&album=' + albumData[i].title + '&format=json').
            success(function (data, status, headers, config) {
                fullAlbumInfo.push(data.album);
                if (ic == albumData.length - 1) {

                    sorted = sortAlbums_releaseDate(fullAlbumInfo);
                    simplifyAlbumDate(fullAlbumInfo);
                    removeBracketsFromTrackName(fullAlbumInfo)
                }
                ic++;
            }).error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    }
    artist.albums = sorted;
    $scope.artist = artist;
    return sorted;
    //TODO because we're pushing $SCOPE here why return anything. Shouldn't scope here but it works rn. TIDY
}

function sortAlbums_releaseDate(fullAlbumInfo) {
    fullAlbumInfo.sort(function (a, b) {
        return new Date(b.releasedate) - new Date(a.releasedate);
    });
    return fullAlbumInfo;
}

function simplifyAlbumDate(fullAlbumInfo) {
    for (var i in fullAlbumInfo) {
        var albumReleaseDate = new Date(fullAlbumInfo[i].releasedate);
        fullAlbumInfo[i].releaseYear = albumReleaseDate.getFullYear();
    }
}

function removeBracketsFromTrackName(fullAlbumInfo) {
    console.log(fullAlbumInfo[1].tracks.track[1]);
    for (var i in fullAlbumInfo) {

        //try {
        //fullAlbumInfo[i].tracks.track);
            for (var k in fullAlbumInfo[i].tracks) {
                //var bob = removeBracketsFromTrackName(fullAlbumInfo[i].tracks[k].name);
                //console.log(bob);
                //fullAlbumInfo[i].tracks.track[k] = bob;
                console.log(k);
            }
        //} catch (e) {
        //    console.log(e);
        //}
    }
}