"use strict";

var positionImage = function positionImage(imageEl) {
    console.log("positioning image...")
    console.log(imageEl);
    var imageDimensions = imageEl.dataset.imageDimensions.split('x');
    var originalWidth = imageDimensions[0];
    var originalHeight = imageDimensions[1];
    var focalPoint = imageEl.dataset.imageFocalPoint.split(',');
    var focalPointX = focalPoint[0];
    var focalPointY = focalPoint[1];
    var parentNode = imageEl.parentNode;

    var scale = function() {
        var imageRatio = originalWidth / originalHeight;
        var parentClientSize = {
            height: parentNode.clientHeight,
            width: parentNode.clientWidth
        };
        var parentRatio = parentClientSize.width / parentClientSize.height;

        if (imageRatio > parentRatio) {
            return parentClientSize.height / originalHeight;
        }
        console.log(parentClientSize.width / originalWidth);
        return parentClientSize.width / originalWidth;
    }();

    var getRelativeOffset = function getRelativeOffset() {
        var targetWidth = Math.ceil(originalWidth * scale);
        var targetHeight = Math.ceil(originalHeight * scale);
        var parentDimensionWidth = parentNode.offsetWidth;
        var parentDimensionHeight = parentNode.offsetHeight;
        var overflowWidth = targetWidth - parentDimensionWidth;
        var overflowHeight = targetHeight - parentDimensionHeight;
        var valueX;

        if (overflowWidth === 0) {
            valueX = focalPointX;
        } else {
            valueX = Math.max(Math.min(targetWidth * focalPointX - parentDimensionWidth * 0.5, overflowWidth), 0) / overflowWidth;
        }

        var valueY;

        if (overflowHeight === 0) {
            valueY = focalPointY;
        } else {
            valueY = Math.max(Math.min(targetHeight * focalPointY - parentDimensionHeight * 0.5, overflowHeight), 0) / overflowHeight;
        }

        return {
            valueX: valueX,
            valueY: valueY
        };
    };

    var relativeOffset = getRelativeOffset();
    var valueX = relativeOffset.valueX;
    var valueY = relativeOffset.valueY;
    imageEl.style.objectPosition = "".concat(valueX * 100, "% ").concat(valueY * 100, "%");
    Object.assign(imageEl.style, {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    });
};