/**
 * Created by hsenid on 12/18/15.
 */
var app=angular.module('myapp',['ngRoute','myapp.login','myapp.addusers','myapp.viewUser'])

app.controller('indexCtrl',["$scope",function($scope){
    $scope.ServiceName=[
        {
            service:"Architec",
            details:"architec your house",
            src:'imgs/index/archi.jpeg'
        },
        {
            service:"Engineering",
            details:"Plan your House",
            src:'imgs/index/eng.jpeg'
        },
        {
            service:"Engineering",
            details:"Plan your House",
            src:'imgs/index/eng.jpeg'
        }
    ]
}])
