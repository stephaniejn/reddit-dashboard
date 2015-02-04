/* put js code here */

var redditApp = angular.module("RedditApp",[])

redditApp.controller('SearchController', ['$scope', '$http', function($scope, $http){
    console.log('this file is running.');
    $scope.searchTerm = ""
    $scope.searches = [];
    $scope.posts = {};

    $scope.search = function(){

        var req = {
            url: 'http://www.reddit.com/search.json',
            params: {
                q: $scope.searchTerm
                // type: $scope.searchType
            }
        }
        // console.log(req)
        // console.log($scope.searchTerm)

        $http(req).success(function(data){
            if($scope.searches.indexOf($scope.searchTerm) == -1){
            $scope.searches.push({active:true, name:$scope.searchTerm})
            };
            $scope.loading = false
            $scope.posts = data.data.children
            // console.log($scope.posts[0].data.thumbnail)

        })
    }
        $scope.showImage = function () {

    if ($scope.posts.data.thumbnail != "") {
        // console.log($scope.posts.data.thumbnail)
        return true;
    }
    };

    // NOT removing correct one
   $scope.remove = function(index) {

    var index = $scope.searches.indexOf($scope.searchTerm)
    console.log(index)
    // console.log($scope.searches)
    // console.log(index)
     $scope.searches.splice(index, 1);
    }

}])
 // $scope.activeClass = function(search){
    //     if ($scope.searches.indexOf($scope.searchTerm) != -1){
    //           console.log($scope.searches.indexOf($scope.searchTerm))
    //           return true
    //     }
    // }

