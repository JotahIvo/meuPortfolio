const buttonList = document.querySelectorAll('.list__item');

function removeClass(list, className){
    for(let i = 0; i < list.length; i++){
        list[i].classList.remove(className);
    };
};

for(let i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener('click', () => {
        removeClass(buttonList, 'activated-button');
        buttonList[i].classList.add('activated-button');
    });
};