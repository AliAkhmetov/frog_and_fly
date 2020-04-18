var fly = document.getElementById('fly'),
tongue = document.getElementById('tongue'),
timerIdFly = null,
xt1 = tongue.style.left, yt1 = tongue.style.top,
xf1 = fly.style.left, yf1 = fly.style.top;

function startFly(){ //старт полёта мухи по траектории
  var mirror = fly.classList,
  x = fly.offsetLeft, d = 1, speedFly = 1;

  var test = function startFly1(){
    if (x>430) {
      d = -1;
      mirror.add("mirrorY");
    } else if(x < 0){
      d = 1;
      mirror.remove("mirrorY");
    }
    x = x + d * speedFly;
    fly.style.left = x +'px';
  }
timerIdFly = setInterval(test, 7);
}

function aim() {
  var x1 = event.clientX, y1= event.clientY; //узнали куда лететь языку
  var x2 = tongue.offsetLeft, xst = tongue.offsetLeft, y2 = tongue.offsetTop,
  yst=tongue.offsetTop,  speedTongue=1, speed =5,
  dy = y2-y1, dx = Math.abs(x2-x1),
  dx1 = x2-x1,
  r = Math.sqrt(Math.pow(dy, 2) +Math.pow(dx, 2));
   if (Math.sign(dx1)==1) {
    sinPos =- dy/r;
    cosPos =- dx/r;
  } else {
    sinPos =-dy/r;
    cosPos =dx/r;
  }

var test1 = function startEat(){
  var fly = document.getElementById('fly'),
  xf = fly.offsetLeft,  yf = fly.offsetTop;

  var  tongue = document.getElementById('tongue'),
  xtt = tongue.offsetLeft,  ytt = tongue.offsetTop;

  if (y2<y1 && x2<x1&& Math.sign(dx1)==1){
    sinPos = dy/r;
    cosPos = dx/r;
    console.log("ЛЕВЫЙ----");
  }  else if (y2<y1 && x2>x1 && Math.sign(dx1)==-1){
    console.log("ПРАВЫЙ----");
    sinPos = dy/r;
    cosPos = -dx/r;
  }  else if ((y2>yst && x2>xst)||(y2>yst && x2<xst)) {
    clearInterval(timerId);
    console.log("НЕ ПОПАЛ");
  }
  y2 = y2 + sinPos * speedTongue;
  x2 = x2 + cosPos * speedTongue;
  tongue.style.top =y2 +'px';
  tongue.style.left = x2 +'px';
console.log( xf+"__xf"+xtt+"__xtt"+yf+"__yf"+ytt+"__ytt");
  if ((xf+20===xtt)&&(yf+15>ytt)){
    console.log("ПОООПАЛ");
    var tablo = document.getElementById('tablo');
    var qwerty = "ПОПАЛ";
    tablo.innerHTML=qwerty;
    clearInterval(timerId);
    clearInterval(timerIdFly);

  }
}
let timerId=setInterval(test1, speed);
}
