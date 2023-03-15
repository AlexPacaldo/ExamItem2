app.controller('service', ['$scope', 'nyt', function($scope, nyt) {

    //Service
    $scope.list = []
    nyt.then(function(response) {
        for (i = 0; i < response.data.results.length; i++){
            let story = {
                title: response.data.results[i].title,
                abstract: response.data.results[i].abstract,
                url: response.data.results[i].url,
                byline: response.data.results[i].byline,
                published_date: response.data.results[i].published_date
            }
            $scope.list.push(story);
        }
    })
}])