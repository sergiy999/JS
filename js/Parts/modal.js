function modal(){
    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');


more.addEventListener('click', function(){
   overlay.style.display = 'block';
   this.classList.add('more-splash');
   document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function(){
   overlay.style.display = 'none';
   this.classList.remove('more-splash');
   document.body.style.overflow = '';
});

//description-btn
let moreDOctor = document.querySelectorAll('.description-btn');

moreDOctor[0].addEventListener('click', function(){
   window.open('https://www.zdorovaspina.com.ua/');

});

}
module.exports = modal;