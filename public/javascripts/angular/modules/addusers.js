
angular.module('myapp.addusers',[])
    .controller("addUserController",['$scope','$http','$window',function($scope,$http,$window){

        $scope.save=function(form){
            console.log(form.name);
            //console.log($scope.form);
            var data1= {
                name: JSON.stringify(form.name),
                adress1:JSON.stringify(form.add1),
                adress2:JSON.stringify(form.add2),
                adress3:JSON.stringify(form.add3),
                email:JSON.stringify(form.email),
                userName:JSON.stringify(form.username),
                password:JSON.stringify(form.password),
            }
            //$scope.form = {}; // clear the form so our user is ready to enter another
            console.log(data1);
            $http({
                method: 'POST',
                url: "/users/adduser",
                data: $.param(data1),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function(data){
                $scope.form = {};
                console.log(data);
                var url="/users/viewuser/"+(data.msg);
                console.log(url)
                $window.location.href=url
                //console.log(data);
            }).error(function(data) {
                console.log('Error: ' + data);
            });
        }
    }]);