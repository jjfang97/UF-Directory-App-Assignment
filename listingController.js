angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() 
    {
        $scope.listings.push
        ({
            index:$scope.listings.length,
            name: $scope.nName,
            code: $scope.nCode,
            address: $scope.nAddress,
            coordinates: 
            {
                latitude: $scope.nLatitude,
                longitude: $scope.nLongitude
            }
        });
    };

    $scope.deleteListing = function(index) 
    {
        var delIndex = $scope.listings.indexOf(item);
        $scope.listings.splice(delIndex,1);
    };
    $scope.showDetails = function(index) 
    {
        var showIndex = $scope.listings.indexOf(item);
        $scope.detailedInfo = Listings[showIndex];
    };
  }
]);