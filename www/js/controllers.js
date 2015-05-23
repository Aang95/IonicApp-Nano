angular.module('taxiApp.controllers', [])


.controller('registerCtrl', ['$scope','$http',function($scope,$http) {
         
      $scope.master = {};
      $scope.reset={};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
        console.log("testing connectivity",$scope.master);

        var request = $http({
          method: "post",
          url: "http://nanotaxi.dmsinfosystem.com/index.php/registerwebservices",
          data: "$scope.master",


          });

          request.success(function(data, status, headers, config) {
            console.log("testing success",status,data);
            $scope.user={};
          });
          request.error(function(data, status, headers, config) {
            console.log("error",status,data)
          });
      

      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };       
}])



.controller('loginCtrl', ['$scope','$http',function($scope,$http) {


}]);


