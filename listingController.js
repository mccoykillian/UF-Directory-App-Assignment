angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = {
      name: null,
      code: null,
      coordinates: {
        latitude: null,
        longitude: null
      },
      address: null
    };


    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.clearFields = function() {
      $scope.newListing.code = null;
      $scope.newListing.name = null;
      $scope.newListing.latitude = null;
      $scope.newListing.longitude = null;
      $scope.newListing.address = null;
    }

    $scope.addListing = function() {

      if ($scope.newListing.code != '' || $scope.newListing.name != '') {
        var toInsert = {
          name: $scope.newListing.name,
          code: $scope.newListing.code,
          coordinates: {
            latitude: $scope.newListing.coordinates.latitude,
            longitude: $scope.newListing.coordinates.longitude
          },
          address: $scope.newListing.address
        };

        $scope.listings.push(toInsert);
      }

    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
      $scope.detailedInfo = undefined;
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
