(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {

    $scope.checkNumberOfItems = function(){
        var count = $scope.menu.split(",").length;
        if (count === 0){
            $scope.message = "Please enter data first";
        }
        else if (count < 4)
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
