; (function () {
    'use strict';

    angular.module('gallery')
        .directive('galleryDirective', galleryDirective);
    
    function galleryDirective ($document) {
        return {
            restrict: 'A',
            scope: {
                imgUrl: '@',
                imgTitle: '@',
                imgId: '@'
            },
            link: function (scope, element) {
                element.on('click', function (event) {
                    event.preventDefault();

                    var photoPreviewHtml = "<img src='" + scope.imgUrl + "' alt='" + scope.imgTitle + "' /><p><strong>Title: </strong>" + scope.imgTitle + " (id " + scope.imgId + ")</p>";

                    var bigImg = $document[0].createElement('div');
                    bigImg.innerHTML = photoPreviewHtml;
                    bigImg.className = "photo_preveiw";
                    bigImg.onclick = function () {
                        this.parentElement.removeChild(this);
                    };
                    $document[0].body.appendChild(bigImg);
                });
            }
        };
    }
})();