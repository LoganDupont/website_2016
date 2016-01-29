'use strict';

angular.module('portfolioApp')
    .controller('NavCtrl', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });