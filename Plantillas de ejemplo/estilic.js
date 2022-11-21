document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 344) {
        navbar = document.getElementById('navbar_top')
        navbar.classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = navbar.offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 



const buttons = document.querySelectorAll(".ripple");
buttons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    
    var rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
    
    setTimeout(() => {
      ripples.remove()
    },1000);
  });
});