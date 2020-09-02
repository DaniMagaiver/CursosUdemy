app.controller("MainController", ['$scope', '$http', function($scope, $http){
    $scope.todo = {
        title : 'To Do List',
        list: ['Aprender AngularJS', "Fazer teste", "Passar na entrevista"],
    }

    $scope.books = {
        title : 'Books',
        list: []
    }

    function hasAllNumbers(item){
        return /^[0-9]*$/.test(item);
    }

    $scope.addItem = function(itemList, item){
        if((item.length == 10 || item.length == 13) && hasAllNumbers(item)){
            console.log('Is an ISBN number');
            $http.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${item}`)
            .then(function(res){
                const volumeInfo = res.data.items[0].volumeInfo
                itemList.push(`Title: ${volumeInfo.title} // Author: ${volumeInfo.authors}`)   
            })
        }else{
            console.log('Not an ISBN number')
            itemList.push(item)
        }
    }
}])