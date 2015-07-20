; (function () {
    'use strict';

    angular
        .module('gallery')
        .controller('GalleryController', GalleryController)

    function GalleryController(galleryFactory, galleryService) {
        var vm = this;

        vm.imagesResource = galleryFactory.getData();
        vm.imagesHttp = galleryService.getData();
    }
})();