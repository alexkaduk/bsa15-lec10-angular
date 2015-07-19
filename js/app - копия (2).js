(function () {
    var app = angular.module('gallery', ['ngResource'])
        .controller('GalleryController', GalleryController)
        .constant('GET_COUNT', 5);

    function GalleryController(GET_COUNT, $resource, $http) {
        var vm = this;
        vm.imagesR = [];
        vm.imagesHttp = [];

        var ImageGetResourse = $resource('http://jsonplaceholder.typicode.com/photos/:id', { id: '@id' });
        for (var i = 1; i < GET_COUNT; i++) {
            var imageGetResourse = ImageGetResourse.get({ id: i }, function (response) {
                vm.image = response;
                vm.imagesR.push(vm.image);
            }, function (err) {
                console.log('ERROR $resource: '.err);
            });
        }

        for (var i = 1; i < GET_COUNT; i++) {
            vm.url = "http://jsonplaceholder.typicode.com/photos/" + i;
            var postsHttp = $http.get(vm.url).then(function (response) {
                vm.image = response.data;
                vm.imagesHttp.push(vm.image);
            }).catch(function (err) {
                console.log("ERROR $http: ".err);
            });
        }

    }
    // there are 200 photos

})();

/*
var ImageGetResourse = $resource('http://jsonplaceholder.typicode.com/photos/:id', {id: '@id'});
		for(var i=1; i<6; i++){
			var imageGetResourse = ImageGetResourse.get({id:i}, function(response){
				vm.imagesR.push(response);
			}
		},
*/

/*
var ImagesResourse = $resource('http://jsonplaceholder.typicode.com/photos/:id', {id: '@id'});
		var images = ImagesResourse.get({id:1}, function(response){
			vm.image = response;
		},*/