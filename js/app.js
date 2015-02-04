/* put js code here */

var redditApp = angular.module("RedditApp",['ui.bootstrap'])

redditApp.controller('SearchController', ['$scope', '$http', '$modal', function($scope, $http, $modal){
    console.log('this file is running.');
    $scope.searchTerm = ""
    $scope.searches = [];
    $scope.posts = {};

    $scope.search = function(){

        var req = {
            url: 'http://www.reddit.com/search.json',
            params: {
                q: $scope.searchTerm
            }
        }

        $http(req).success(function(data){
            if($scope.searches.indexOf($scope.searchTerm) == -1){
            $scope.searches.push({active:true, name:$scope.searchTerm})
            };
            $scope.loading = false
            $scope.posts = data.data.children

        })
    }
        $scope.showImage = function () {
            // for (var i = 0, i<20, i++)
            if(data.data.children[i].data.thumbnail.length >5){
               return true
            }
    }

    // NOT removing correct one
   $scope.remove = function(index) {

    var index = $scope.searches.indexOf($scope.searchTerm)
    console.log(index)
     $scope.searches.splice(index, 1);
    }

    $scope.showAbout = function(){
        var aboutModal = $modal.open({
            templateUrl:'aboutModal.html',
            controller:'AboutModalCtrl',
            size: 'md'
        });
    }

}])

redditApp.controller('AboutModalCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance){
    $scope.greeting= "Hi"
    $scope.closeThisModal = function(){
        $modalInstance.close();
    }
}])
