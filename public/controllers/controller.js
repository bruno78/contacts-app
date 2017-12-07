var app = angular.module('contactListApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {
    console.log('Hello world from controller!');

    var refresh = function() {
        $http.get('/contactlist').then(function(response) {
            console.log("Data from server successfully received!")
            $scope.contacts = response.data;    
        });
    };
    
    refresh();

    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact)
            .then(function(response) {
                console.log(response);
                $scope.contact = "";
                refresh();
            });
    };

    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/contactlist/' + id).then(function(response) {
            refresh();
        });
    };

    $scope.edit = function(id) {
        $http.get('/contactlist/' + id).then(function(response) {
            $scope.contact = response.data;
        })
    }

    $scope.update = function() {
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response) {
            refresh();
            $scope.deselect();
        })
    }

    $scope.deselect = function() {
        $scope.contact = "";
    }

}])