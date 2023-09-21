var overlay = document.querySelector('.ys-overlay');
var frameImage = document.querySelector('.ys-gallery-frame-image');
var frameContainer = document.querySelector('.ys-gallery-frame-container');
var galleryImages = document.querySelectorAll('.ys-thumb-img');
var closeGallery = document.querySelectorAll('.ys-toggle-gallery')
var btnNext = document.querySelector('.ys-item-next');
var btnPrev = document.querySelector('.ys-item-prev');
var currCounter = document.querySelector('.ys-current-slide');
var totalCounter = document.querySelector('.ys-total-slide');
var skeletonLoading = document.querySelector('.ys-skeleton-loading');

//Counter Formater
var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n
    } else {
        return n;
    }
}

totalCounter.innerHTML = counterFormatter(galleryImages.length);

//skeleton loading
const skeletonAnim = function (imagem) {
    var myImage = new Image();
    myImage.src = imagem;
    myImage.addEventListener('load', function () {
        skeletonLoading.classList.add('ys-fade-out');
        console.log('iniciou fade out')
        setTimeout(function () {
            skeletonLoading.style.display = 'none';
            console.log('iniciou display none')
        }, 2000)
    });
}

//Open gallery Modal

const getImageSrc = function () {
    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener('click', function () {
            var imageSrc = this.getAttribute('data-src');
            var itemNum = this.getAttribute('data-item');

            skeletonLoading.style.display = 'flex';

            frameImage.setAttribute('src', imageSrc);
            frameImage.setAttribute('data-index', itemNum);
            overlay.classList.add('ys-is-open');
            frameContainer.classList.add('ys-is-open');
            currCounter.innerHTML = counterFormatter(itemNum);

            skeletonAnim(imageSrc);


        });
    }
}
getImageSrc();

for (var c = 0; c < closeGallery.length; c++) {
    closeGallery[c].addEventListener('click', function () {
        overlay.classList.remove('ys-is-open');
        frameContainer.classList.remove('ys-is-open');
    });
}


const nextItem = function () {
    //identificamos o item atual no frame
    var currItemNum = frameImage.getAttribute('data-index');

    //definimos o numero do proximo item 
    var nextItemNum = parseInt(currItemNum) + 1;

    //Fazemos o Loop e identificamos qual item faz match com o numero do proximo item
    for (var n = 0; n < galleryImages.length; n++) {
        var item = galleryImages[n];
        var itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === nextItemNum) {
            //capturamos o data-src
            var nextSrc = item.getAttribute('data-src');
            var nextIndex = item.getAttribute('data-item');

            skeletonLoading.style.display = 'flex';



            //passamos o data-src para a tag de img no frame
            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);

            currCounter.innerHTML = counterFormatter(nextIndex);

            skeletonAnim(nextSrc);
        }
    }
}

const prevItem = function () {
    //identificamos o item atual no frame
    var currItemNum = frameImage.getAttribute('data-index');

    //definimos o numero do proximo item 
    var prevItemNum = parseInt(currItemNum) - 1;

    //Fazemos o Loop e identificamos qual item faz match com o numero do proximo item
    for (var p = 0; p < galleryImages.length; p++) {
        var item = galleryImages[p];
        var itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === prevItemNum) {
            //capturamos o data-src
            var prevSrc = item.getAttribute('data-src');
            var prevIndex = item.getAttribute('data-item');

            skeletonLoading.style.display = 'flex';

            //passamos o data-src para a tag de img no frame
            frameImage.setAttribute('src', prevSrc);
            frameImage.setAttribute('data-index', prevIndex);

            currCounter.innerHTML = counterFormatter(prevIndex);

            skeletonAnim(prevSrc);
        }
    }
}

btnNext.addEventListener('click', function () {
    nextItem();
})

btnPrev.addEventListener('click', function () {
    prevItem();
})