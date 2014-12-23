/**
 * Created by Rory on 23/12/2014.
 */


(function (angular) {

    function MainController($scope, $http) {

        $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Eminem&api_key=5c14af2842949df6b7263aacc7ffffb1&format=json').
            success(function (data, status, headers, config) {

                $scope.similar = data.artist.similar.artist;
                console.log(data.artist.similar);
                $scope.artistResult = data;
            }).
            error(function (data, status, headers, config) {

            });


    }

    angular.module("app", []).controller("MainController", ["$scope", "$http", MainController]);

})(angular);