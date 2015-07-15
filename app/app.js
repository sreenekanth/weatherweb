(function(){
    'use strict';


var app = angular.module('myApp',
    [ 'ngRoute'
     ]);

    


app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl:'app/view/home.html'
    });

    
    // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo:'/'
    });

}]);
})();
