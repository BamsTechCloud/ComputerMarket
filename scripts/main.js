
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_IMAGE_TITLE = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl,titleText) {
    'use strict';
    var Detail_Image = document.querySelector(DETAIL_IMAGE_SELECTOR);
    Detail_Image.setAttribute('src',imageUrl);
    var Detail_Image_Title = document.querySelector(DETAIL_IMAGE_TITLE);
    Detail_Image_Title.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}


function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click',function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function getThumbnailArray() {
    'use strict';
    var thumbnail = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnail);
    return thumbnailArray;
}

function initializeEvents() {
    var thumbnails = getThumbnailArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();

