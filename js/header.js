const mobilmenuButton = document.querySelector('#mobilmenu');
const menulinks = document.querySelectorAll('#menu > li > a');
const menu = document.querySelector('#menu');

function menuShowHide() {
    if(menu.offsetHeight > 0){
        menu.style.maxHeight = '0';
    } else {
        menu.style.maxHeight = '500px';
    }
}
function submenuShowHide(){
    const submenu = this.nextElementSibling;
    if(submenu.offsetHeight > 0){
        submenu.style.maxHeight = '0';
    } else {
        submenu.style.maxHeight = '500px';
    }
}

mobilmenuButton.addEventListener('click', menuShowHide);
menulinks.forEach(el => el.addEventListener('click', submenuShowHide));
