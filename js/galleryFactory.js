(function () {
    'use strict';

    angular
        .module('gallery')
        .service('galleryFactory', galleryFactory)

    function galleryFactory(GET_COUNT, $resource) {
        var vm = this;

        return {
            getData: getData
        };

        function getData() {
            vm.imagesR = [];
            var ImageGetResourse = $resource('http://jsonplaceholder.typicode.com/photos/:id', { id: '@id' });
            for (var i = 1; i <= GET_COUNT; i++) {
                var imageGetResourse = ImageGetResourse.get({ id: i }, function(response) {
                    vm.image = response;
                    vm.imagesR.push(vm.image);
                }, function(err) {
                    console.log('ERROR $resource: '.err);
                });
            }
            return vm.imagesR;
        }
    }
})();