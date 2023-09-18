var overlay = document.querySelector('.ys-overlay');
var frameImage = document.querySelector('.ys-gallery-frame-image');
var frameContainer = document.querySelector('.ys-gallery-frame-container');
var galleryImages = document.querySelectorAll('.ys-thumb-img');
var closeGallery = document.querySelectorAll('.ys-toggle-gallery')

const getImageSrc = function () {
    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener('click', function () {
            var imageSrc = this.getAttribute('data-src');
            frameImage.setAttribute('src', imageSrc);
            overlay.classList.add('ys-is-open');
            frameContainer.classList.add('ys-is-open');
        });
    }
}

for (var c = 0; c < closeGallery.length; c++) {
    closeGallery[c].addEventListener('click', function () {
        overlay.classList.remove('ys-is-open');
        frameContainer.classList.remove('ys-is-open');
    })
}

getImageSrc();