contactGallery.controller('myCtrl', function($scope) {

    $scope.details = [];
    $scope.enableEdit = [];

    // first function to add the input data

    $scope.add = function () {
            $scope.details.push({
                name : $scope.name,
                phone : $scope.phone,
                email : $scope.email
            });
        };
    // second function to edit input data 
    //$scope.editItem = function (index) {
     //   $scope.enableEdit[index] = true;
   // }
    //third function to delete unuseful data
    $scope.removeItem = function (contact){
        $scope.details.splice(contact, 1);
    };
});