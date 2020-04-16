function startFly(){
  var fly = document.getElementById('fly'), mirror = fly.classList,
  x = fly.offsetLeft, d = 1, speed = 1;

  var test = function startFly1(){
    if (x>430) {
      d = -1;
      mirror.add("mirrorY");
    } else if(x < 0){
      d = 1;
      mirror.remove("mirrorY");
    }
    x = x + d * speed;
    fly.style.left = x +'px';
  }
  setInterval(test, 7);
}

function startEat(){
  var fly = document.getElementById('tongue'),
  y = tongue.offsetTop, d = 1, speed = 1;

  var test1 = function startEat(){
    if (y>305) {
      d = -1;
    } else if(y<55){
      d = 1;
    }
    y = y + d * speed;
    fly.style.top = y +'px';
  }
  setInterval(test1, 7);
}
