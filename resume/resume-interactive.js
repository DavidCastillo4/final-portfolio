
function animateCSS(id, animationName) {   
  let e=document.getElementById(id);
  e.classList.add('animated', animationName)
  e.style.animationDuration="4s";

  function handleAnimationEnd() {    
      e.classList.remove('animated', animationName)
      e.removeEventListener('animationend', handleAnimationEnd)           
  }
  e.addEventListener('animationend', handleAnimationEnd)
}



