var player = {
  money: 0,
  p1: 1,
  p2: 0,
  p3: 0,
  p4: 0,
  p5: 0,
  p6: 0,
  p7: 0,
  p8: 0,
  p9: 0,
  p1cost: 3,
  p2cost: 3,
  p3cost: 3,
  p4cost: 3,
  p5cost: 3,
  p6cost: 3,
  p7cost: 3,
  p8cost: 3,
  p9cost: 3,
  victories: 0,
  tickspeed: 1000
}

var increaseamt = 0;
var mode = "light"
var docEl = document.documentElement;

function updatescreen() {
  increaseamt = 0;
  increaseamt += player.p1;
  increaseamt = increaseamt * (player.p2 + 1);
  increaseamt = increaseamt * (player.p3 + 1);
  increaseamt = increaseamt * (player.p4 + 1);
  increaseamt = increaseamt * (player.p5 + 1);
  increaseamt = increaseamt * (player.p6 + 1);
  increaseamt = increaseamt * (player.p7 + 1);
  increaseamt = increaseamt * (player.p8 + 1);
  increaseamt = increaseamt * (player.p9 + 1);
  player.money += increaseamt;
  document.getElementById("money").innerHTML = player.money
  document.getElementById("pertick").innerHTML = increaseamt
}

function lights() {
  if (mode == "light") {
    mode = "dark"
    document.getElementById("lights").innerHTML = "Lights On"
    docEl.style.backgroundColor = '#000000';
    docEl.style.filter = 'invert(100%)';
    docEl.style.webkitFilter = 'invert(100%)';
    docEl.style.mozFilter = 'invert(100%)';
    docEl.style.msFilter = 'invert(100%)';
    docEl.style.oFilter = 'invert(100%)';
  } else if (mode == "dark") {
    mode = "light"
    document.getElementById("lights").innerHTML = "Lights Out"
    docEl.style.backgroundColor = '#ffffff';
    docEl.style.filter = 'invert(0%)';
    docEl.style.webkitFilter = 'invert(0%)';
    docEl.style.mozFilter = 'invert(0%)';
    docEl.style.msFilter = 'invert(0%)';
    docEl.style.oFilter = 'invert(0%)';
  }
}

var timer = window.setInterval(updatescreen, player.tickspeed);
