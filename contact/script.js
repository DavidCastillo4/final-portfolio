let email = document.getElementById('email');

function toggleEmailVis(e) {  
  if (e.id =="No") {
    email.style.visibility="hidden"
  }

  if (e.id == "Yes" & e.checked == true) {    
    email.style.visibility='visible'
  }  
}