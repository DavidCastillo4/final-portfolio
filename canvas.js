
let drawCircles = () => {  
  var canvas = document.createElement('canvas')   
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const c = canvas.getContext('2d')
  for(let i=0; i < 50; i++ ) {
    const x = Math.random() * (window.innerWidth - 100)
    const y = Math.random() * (window.innerHeight - 100)
    // the first value will be null to accommodate for no 0 number being drawn
    const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
    const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1;
  
    // Draw Circle
    c.beginPath();
    // replace "black" with the random color selected from the list
    c.strokeStyle = colors[randomIndex];
    c.arc(x, y, 2, 0, 25 * Math.PI);
    c.stroke();    
  }  
  document.body.style.background = 'url(' + canvas.toDataURL() + ')';
  }
  
  setInterval(function(){ drawCircles(); }, 1000);
  //drawCircles()
  
