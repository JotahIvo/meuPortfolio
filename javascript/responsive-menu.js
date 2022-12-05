const hamburguerMenu = document.querySelector('.hamburguer-menu');
const menuItens = document.querySelectorAll('#item');
const menu = document.querySelector('#hidden-menu');

let clicked = false;

function verify(menu){
    if(menu.classList[0] == 'responsive-menu'){
        clicked = false;
    } else {
        clicked = true;
    };
};

hamburguerMenu.addEventListener('click', () => {
    verify(menu);

    if (clicked) {
        menu.classList.add('responsive-menu');
        for (let i = 0; i < menuItens.length; i++) {
            menuItens[i].classList.add('responsive-item');
            menuItens[i].style.display = 'block';
        };

    } else {
        menu.classList.remove('responsive-menu');
        for (let i = 0; i < menuItens.length; i++) {
            menuItens[i].classList.remove('responsive-item');
            menuItens[i].style.display = 'none';
        };
    };
});

for(let i = 0; i < menuItens.length; i++){
    menuItens[i].addEventListener('click', () => {
        menu.classList.remove('responsive-menu');
        for (let i = 0; i < menuItens.length; i++) {
            menuItens[i].classList.remove('responsive-item');
            menuItens[i].style.display = 'none';
        };
    });
};