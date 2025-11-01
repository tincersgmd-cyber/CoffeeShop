let usName = prompt('Введите ваше имя');
let usAge = Number(prompt('Введите ваш возраст'));
let title = document.getElementById('top_title');
let promoWrapper = document.getElementById('wrapper');
title.innerText = "Здравствуйте, " + usName + ". Мы предлагаем вам лучшие сорта кофе со всего мира";

if (usAge < 21) {
    promoWrapper.classList.toggle('kids');
} else if(usAge >= 21 && usAge <= 60){
    promoWrapper.classList.toggle('adults');
} else {
    promoWrapper.classList.toggle('elders');
}