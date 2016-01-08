/**
 * Created by hsenid on 1/8/16.
 */
angular.module('myapp.viewUser',[])
    .controller('viewController',['$scope','$http',function($scope,$http){

        $http.get('users/viewuser/:id')
            //console.log($routeParams.name)
            .success(function(data) {
                $scope.names = data.name;
                $scope.mail = data.email;
                $scope.add1=data.address1;
                $scope.add2=data.address2;
                $scope.add3=data.address3;
                //$scope.tel=data.tel;
                //$scope.items=data.item;
            })
            .error(function(data){
                console.log(data)
            })
    }]);