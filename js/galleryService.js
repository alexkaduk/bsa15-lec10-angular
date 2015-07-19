(function () {
    'use strict';

    angular
        .module('gallery')
        .service('galleryService', galleryService)

    function galleryService(GET_COUNT, $http) {
        var vm = this;

        vm.getData = getData;

        function getData() {
            vm.imagesHttp = [];
            for (var i = 1; i <= GET_COUNT; i++) {
                vm.url = "http://jsonplaceholder.typicode.com/photos/" + i;
                var postsHttp = $http.get(vm.url).then(function (response) {
                    vm.image = response.data;
                    vm.imagesHttp.push(vm.image);
                }).catch(function (err) {
                    console.log("ERROR $http: ".err);
                });
            }
            return vm.imagesHttp;
        };
    }
})();