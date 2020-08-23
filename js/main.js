let form__wrapper =  document.getElementById ('form__wrapper');
let add__city =  document.getElementById ('add__city');
let city__hidden =  document.getElementById ('add__city-wrapper');
let submit =  document.getElementById ('submit');
let cancel =  document.getElementById ('cancel');

form__wrapper.style.display ='none'

add__city.onclick = function () {
    form__wrapper.style.display ='block'
    city__hidden.style.display ='none'
}

cancel.onclick = function () {
    form__wrapper.style.display ='none'
    city__hidden.style.display ='block'
}
