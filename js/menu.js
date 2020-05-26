const menuToggle = document.querySelector('#menu-toggle');
const MobileNavContainer=document.querySelector('#mobile_nav');

menuToggle.onclick = function(){
  menuToggle.classList.toggle('menu-icon-active');
  MobileNavContainer.classList.toggle('mobile_nav_active');
}
