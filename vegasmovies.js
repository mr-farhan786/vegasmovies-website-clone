burger=document.querySelector('.burger')
navcontainer = document.querySelector('.navcontainer')
v=document.querySelector('.v')
NavBar=document.querySelector('.NavBar');
lis =document.querySelector('.lis');

burger.addEventListener('click',()=>{
    navcontainer.classList.toggle('navcontainer');
    v.classList.toggle('v');
    NavBar.classList.toggle('NavBar');
    lis.classList.toggle('lis');

})
