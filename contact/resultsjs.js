let fn = () => {
  let a={};
  let st=window.location.href;
  let pa=st.split('?')[1].split('&');
  let d=document.getElementById('d');
  d.innerHTML=pa;
}


