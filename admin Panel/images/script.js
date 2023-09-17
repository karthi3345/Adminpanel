const sideMenu= document.querySelector("#aside");
const menuBtn= document.querySelector('#menu-btn');
const closeBtn=document.querySelector("#close-btn");
const themeToggle=document.querySelector('.toggle');

menuBtn.addEventListener('click', () => {

    sideMenu.style.display="block";
})

themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
})