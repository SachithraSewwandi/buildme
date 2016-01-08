/**
 * Created by hsenid on 1/6/16.
 */

angular.module('myapp.login',['ngRoute'])
/*    .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider
            .when('/login', {
                templateUrl:'partials/login.jade',
                controller:'loginControl'
            });

    }])*/
    .controller("loginControl",['$scope','$http',function($scope,$http){
        $scope.email="joestudent@gmail.com"
        $scope.password="password"
        $http.post
    }]);