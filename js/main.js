'Use strickt';

let input = document.querySelectorAll('.input');
let cityInfo = document.querySelectorAll('.city__info');
let cityTitle = document.querySelectorAll('.city__title');
let submitBtn = document.querySelectorAll('.form__btn');
let cancelBtn = document.querySelectorAll('.form__btn');
let textArea = document.querySelectorAll('.text__area');
let cityDescr = document.querySelectorAll('.city__descr');
let cityInfoItem = document.querySelectorAll('.city__info-item');
let formWrapper = document.querySelector('.form__wrapper');
let addCityBtn = document.querySelector('.add__city');
let iconDeleteBtn = document.querySelectorAll('.icon__btn.delete');
let addCityWrapper = document.querySelector('.add__city-wrapper');




function AddFormItem(){
formWrapper.style.display = 'block';
}
function HideFormItem(){
formWrapper.style.display = 'none';
}

function DeleteCityInfoItem(){
        cityInfoItem.forEach(item => {
                item[1].remove();
        });
}

addCityBtn.addEventListener('click', AddFormItem);
cancelBtn[1].addEventListener('click', HideFormItem); 
submitBtn[0].addEventListener('click', createNewElement);


const cityInfoItemDB = [];

function createNewElement(){
        const cityName = input[0].value;
        const cityInfo = textArea[0].value;
        input[0].value = '';
        textArea[0].value = '';
        if(cityName || cityInfo){
                const newElement = document.createElement('div');
                newElement.innerHTML = `<div class="city__info-item">
                <div class="city__title">${cityName}</div>
                <div class="city__descr">${cityInfo}</div>
                <div class="button__icon">
              <button class="icon__btn edit"><i class="fas fa-edit"></i></button>
              <button class="icon__btn"><i class="far fa-trash-alt"></i></button>
            </div>
            </div>`;
            addCityWrapper.after(newElement);
            cityInfoItemDB.push(newElement);       
        }  
}

function del(){
        iconDeleteBtn.forEach((btn, i)=>{
                btn.addEventListener('click', ()=>{
                        cityInfoItem.forEach((item, j)=>{
                                if(i ==j){
                                        item.remove();
                                        cityInfoItemDB.splice(j, 1);
                                        console.log(cityInfoItemDB);
                                }
                        });
                });
        });
}
del();





















