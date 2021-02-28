const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.header_items');
const overlays = document.querySelector('#overlay');

menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    if (menu.classList.contains('is-active')){
       overlays.classList.add('overlay');
    }
    else{
        overlays.classList.remove('overlay');
    }
});





