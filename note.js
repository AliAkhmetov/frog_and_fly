function startFly(){
var fly = document.getElementById('fly');
console.log(fly);
x = fly.offsetLeft;
console.log(x);
for (var i = 0; i <5; i++) {
fly.style.left = x +50+'px';
}
};
