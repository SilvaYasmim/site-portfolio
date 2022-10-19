//Declarando Variaveis
var btnContact = document.querySelector('.ys-btn-contact');
var toggleModal = document.querySelectorAll('.ys-toggle-modal')

//Page preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.ys-preloader');
    pagePreloder.classList.add('ys-fade-out');

    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Abrindo e fechando informações de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.ys-contact-info');

    boxContact.classList.toggle('ys-is-open');

    this.classList.toggle('ys-change-icon');
});

//Abrindo e Fechando o modal de orçamento//

for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var overlay = document.querySelector('.ys-overlay');
        var modalOrcamento = document.querySelector('#ys-modal-orcamento');

        overlay.classList.toggle('ys-is-open');
        modalOrcamento.classList.toggle('ys-is-open');
        modalOrcamento.classList.toggle('ys-slide-top-in');
    });
}