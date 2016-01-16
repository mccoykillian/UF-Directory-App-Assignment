angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = {
      name: '',
      code: '',
      coordinates: {
        latitude: '',
        longitude: ''
      }
    };


    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.clearFields = function() {
      $scope.newListing.code = '';
      $scope.newListing.name = '';
      $scope.newListing.latitude = '';
      $scope.newListing.longitude = '';
      $scope.newListing.address = '';
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
