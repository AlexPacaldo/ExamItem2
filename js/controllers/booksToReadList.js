app.controller('booksToReadList', ['$scope', function($scope) {
    $scope.booksToReadList = []
    $scope.addBook = function(){
        $scope.errortext = "";
        if (!$scope.addToRead) {return;}
        if ($scope.booksToReadList.indexOf($scope.addToRead) == -1){
            $scope.booksToReadList.push($scope.addToRead)
        }else{
            $scope.errortext = "This book is already in your List"
        }
        
    }
    $scope.removeBook = function(x){
        $scope.booksToReadList.splice(x,1);
    }
}])