; (function () {
    'use strict';

    angular
        .module('gallery')
        .directive('galleryDirective', galleryDirective);

    function galleryDirective() {
        return {
			rectrict: 'E',
            template: 'Title'
        };
    };
})();