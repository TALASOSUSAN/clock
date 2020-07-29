var st = document.querySelector(".showtime");


function s(){
  var sct = new Date();
    var h = sct.getHours();
    if(h > 12){
      h = h-12;
    }
    else if(h == 0){
      h = 12;
    }
  var m = sct.getMinutes();
  var s = sct.getSeconds();
  var dt = h+" : "+m+" : "+s;
  st.innerHTML = dt;
  
}

s();

setInterval(s,1000);
ggggggggg


var body = document.getElementById('body')
var sho = document.getElementById('show')

function r(){
  body.style.background = 'rgb(50,0,0)'
  sho.style.color = "rgb(0,200,255)"
  sho.style.border = '1px solid rgb(250,0,0)'
  sho.style.textShadow = '0 0 10px rgb(255,0,05),0 0 10px rgb(255,0,5)'
  sho.style.boxShadow = '0px 0px 32px rgb(255,5,5),inset 0px -20px 20px rgba(250,250,250,0.5)'
  sho.style.background = 'linear-gradient(to top left,transparent,rgb(255,5,5))'
  sho.style.WebkitBackgroundClip='text'
}

function p(){
  body.style.background = 'rgb(50,0,105)'
  sho.style.color = "rgb(0,200,255)"
  sho.style.border = '1px solid rgb(250,0,250)'
  sho.style.textShadow = '0 0 10px rgb(255,0,255),0 0 10px rgb(255,0,255)'
  sho.style.boxShadow = '0px 0px 32px rgb(255,5,255),inset 0px -20px  20px rgba(250,250,250,0.5)'
  sho.style.background = 'linear-gradient(to top left,transparent,rgb(255,5,255))'
  sho.style.WebkitBackgroundClip='text'
}


function g(){
  body.style.background = 'rgb(0,0,0)'
 
sho.style.border = '1px solid rgb(250,250,250)'
  sho.style.textShadow = '0 0 10px rgb(255,250,255),0 0 10px rgb(255,250,255)'
  sho.style.boxShadow = '0px 0px 32px rgb(255,255,255),inset 0px -20px 20px rgba(250,250,250,0.5)'
  sho.style.background = 'linear-gradient(to top left,transparent,rgb(255,255,255))'
  sho.style.WebkitBackgroundClip='text'
}