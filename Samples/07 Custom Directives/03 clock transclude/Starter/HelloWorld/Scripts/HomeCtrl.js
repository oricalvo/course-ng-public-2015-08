﻿angular.module("myApp").controller("HomeCtrl", function ($scope, $timeout) {
    $timeout(function () {
        $scope.zones = 123;
    }, 1000);

    $scope.removeZone = function () {
        $scope.clock.removeZone("NY");
    }
});
