//PORTIFOLIO SLIDER

//Declarando variaveis do slider
var sliderContainer = document.querySelector('.ys-slider-container');
var sliderList = document.querySelector('.ys-slider-list');
var sliderItem = document.querySelectorAll('.ys-slider-item');
var sliderListWidth = null;

//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;


//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px';

for (var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px';
    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px'



//Fazendo Animações do Slider onClick

var prevItem = document.querySelector('.ys-item-prev');
var nextItem = document.querySelector('.ys-item-next');
var sliderPos = 0;

//HANDLERS

//Next slide animação
var nextSlideAnim = function () {
    var lastItem = sliderListWidth - containerWidth;

    if ((-1 * (sliderPos) === lastItem)) {
        return;
    }
    sliderPos -= containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

//Prev slide animação
var prevSlideAnim = function () {

    if (sliderPos === 0) {
        return;
    }
    sliderPos += containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

nextItem.addEventListener('click', function () {
    nextSlideAnim();

});

prevItem.addEventListener('click', function () {
    prevSlideAnim();

});