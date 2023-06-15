//PORTIFOLIO SLIDER

//Declarando variaveis do slider
var sliderContainer = document.querySelector('.ys-slider-container');
var sliderList = document.querySelector('.ys-slider-list');
var sliderItem = document.querySelectorAll('.ys-slider-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector('.ys-item-prev');
var nextItem = document.querySelector('.ys-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.ys-current-slide');
var totalSlide = document.querySelector('.ys-total-slide');
var currentCounter = 1;


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

//Counter Formater
var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n
    } else {
        return n;
    }
}

//Counter Add

var counterAdd = function () {
    if ((currentCounter >= 0) && (currentCounter < sliderTotalItems)) {
        currentCounter++;
        currentSlide.innerHTML = counterFormatter(currentCounter);
    }
}

//Counter Remove

var counterRemove = function () {
    if ((currentCounter > 1) && (currentCounter <= sliderTotalItems)) {
        currentCounter--;
        currentSlide.innerHTML = counterFormatter(currentCounter);
    }
}

//ACTIONS

totalSlide.innerHTML = counterFormatter(sliderTotalItems);


nextItem.addEventListener('click', function () {
    nextSlideAnim();
    counterAdd();

});

prevItem.addEventListener('click', function () {
    prevSlideAnim();
    counterRemove();
});