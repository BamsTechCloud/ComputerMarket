
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_IMAGE_TITLE = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var ESC_KEY = 27;

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
        showDetails();
    });
}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup',function(event) {
        event.preventDefault();
        if(event.keyCode === ESC_KEY) {
            hideDetails();
        }
        console.log(event.keyCode);
    })
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
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
    addKeyPressHandler();
}

initializeEvents();

