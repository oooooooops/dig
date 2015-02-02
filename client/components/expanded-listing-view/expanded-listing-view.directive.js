'use strict';

angular.module('digApp.directives')
.directive('expandedListingView', function(euiConfigs) {
    return {
        restrict: 'E',
        scope: {
            doc: '=',
            getDisplayImageSrc: '=' //this should be in a service instead of on a controller scope
        },
        templateUrl: 'components/expanded-listing-view/expanded-listing-view.partial.html',
        link: function($scope) {
            $scope.euiConfigs = euiConfigs;
        }
    };
});