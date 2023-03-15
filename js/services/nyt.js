app.factory('nyt', ['$http', function($http) {
    return $http.get('https://api.nytimes.com/svc/topstories/v2/books.json', {params: {'api-key': "NToxScpUaOrQxVX1qnKJjjhK53zweSEd"}}).then(
        function(response){
            return response
        },function (error){
            return error
        }
    )
}])