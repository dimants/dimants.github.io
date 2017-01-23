(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
    $scope.menu = "";
    $scope.checkNumberOfItems = function(){
        if ($scope.menu == "")
        {
            $scope.message = "Please enter data first";
            return;
        }

        var count = $scope.menu.split(",").length;
        if (count < 4)
        {
            $scope.message = "Enjoy!";
        }
        else
        {
            $scope.message = "Too much!";
        }
    }
}

})();
