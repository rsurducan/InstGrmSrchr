// Code goes here

angular.module('InstagramSearcher', [])
.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
})
.controller('MyController', function($scope, $http) {
  
  $scope.searchInstagram = function(tag) {
      
    $scope.tag = tag;

    var url = "https://api.instagram.com/v1/tags/{tag}/media/recent".replace("{tag}", tag);
    var request = {
      client_id: "827653d0b2204f728585790dec7f68b1",
      callback: "JSON_CALLBACK"     
    };

    $http({
      method: 'JSONP',
      url: url,
      params: request
    })
    .success(function(response) {
      $scope.results = response.data;
    })
    .error(function() {
      alert('error');
    });
  };

});