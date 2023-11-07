

function removeClass() {
    const fixedNav = document.getElementsByClassName('fixed-navbar');
    console.log(fixedNav.classList);    
    fixedNav[0].classList.remove("hidden"); 
 }
 function addClass() {
    const fixedNav = document.getElementsByClassName('fixed-navbar');
    fixedNav[0].classList.add("hidden");
 }