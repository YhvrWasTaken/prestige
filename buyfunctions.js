function roundNum(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

function buy1() {
  if (player.money >= player.p1cost) {
    player.money -= player.p1cost;
    player.p1 += 1;
    player.p1cost = player.p1cost * 1.2;
    player.p1cost = roundNum(player.p1cost, 0)
    document.getElementById("tier1amt").innerHTML = player.p1;
    document.getElementById("tier1cost").innerHTML = player.p1cost;
  }
}

function buy2() {
  if (player.p1 >= player.p2cost) {
    player.money = 0;
    player.p1 -= player.p2cost;
    player.p2 += 1;
    player.p2cost = player.p2cost * 1.25;
    player.p2cost = roundNum(player.p2cost, 0)
    reset1()
    document.getElementById("tier2amt").innerHTML = player.p2;
    document.getElementById("tier2cost").innerHTML = player.p2cost;
  }
}

function buy3() {
  if (player.p2 >= player.p3cost) {
    player.money = 0;
    player.p2 -= player.p3cost;
    player.p3 += 1;
    player.p3cost = player.p3cost * 1.3;
    player.p3cost = roundNum(player.p3cost, 0)
    reset1()
    reset2()
    document.getElementById("tier3amt").innerHTML = player.p3;
    document.getElementById("tier3cost").innerHTML = player.p3cost;
  }
}

function buy4() {
  if (player.p3 >= player.p4cost) {
    player.money = 0;
    player.p3 -= player.p4cost;
    player.p4 += 1;
    player.p4cost = player.p4cost * 1.25;
    player.p4cost = roundNum(player.p4cost, 0)
    reset1()
    reset2()
    reset3()
    document.getElementById("tier4amt").innerHTML = player.p4;
    document.getElementById("tier4cost").innerHTML = player.p4cost;
  }
}

function buy5() {
  if (player.p4 >= player.p5cost) {
    player.money = 0;
    player.p4 -= player.p5cost;
    player.p5 += 1;
    player.p5cost = player.p5cost * 1.2;
    player.p5cost = roundNum(player.p5cost, 0)
    reset1()
    reset2()
    reset3()
    reset4()
    document.getElementById("tier5amt").innerHTML = player.p5;
    document.getElementById("tier5cost").innerHTML = player.p5cost;
  }
}

function buy6() {
  if (player.p5 >= player.p6cost) {
    player.money = 0;
    player.p5 -= player.p6cost;
    player.p6 += 1;
    player.p6cost = player.p6cost * 1.25;
    player.p6cost = roundNum(player.p6cost, 0)
    reset1()
    reset2()
    reset3()
    reset4()
    reset5()
    document.getElementById("tier6amt").innerHTML = player.p6;
    document.getElementById("tier6cost").innerHTML = player.p6cost;
  }
}

function buy7() {
  if (player.p6 >= player.p7cost) {
    player.money = 0;
    player.p6 -= player.p7cost;
    player.p7 += 1;
    player.p7cost = player.p7cost * 1.3;
    player.p7cost = roundNum(player.p7cost, 0)
    reset1()
    reset2()
    reset3()
    reset4()
    reset5()
    reset6()
    document.getElementById("tier7amt").innerHTML = player.p7;
    document.getElementById("tier7cost").innerHTML = player.p7cost;
  }
}

function buy8() {
  if (player.p7 >= player.p8cost) {
    player.money = 0;
    player.p7 -= player.p8cost;
    player.p8 += 1;
    player.p8cost = player.p8cost * 1.25;
    player.p8cost = roundNum(player.p8cost, 0)
    reset1()
    reset2()
    reset3()
    reset4()
    reset5()
    reset6()
    reset7()
    document.getElementById("tier8amt").innerHTML = player.p8;
    document.getElementById("tier8cost").innerHTML = player.p8cost;
  }
}

function buy9() {
  if (player.p8 >= player.p9cost) {
    player.money = 0;
    player.p8 -= player.p9cost;
    player.p9 += 1;
    player.p9cost = player.p9cost * 1.2;
    player.p9cost = roundNum(player.p9cost, 0)
    reset1()
    reset2()
    reset3()
    reset4()
    reset5()
    reset6()
    reset7()
    reset8()
    document.getElementById("tier9amt").innerHTML = player.p9;
    document.getElementById("tier9cost").innerHTML = player.p9cost;
  }
}

function reset1() {
  player.p1 = 1;
  player.p1cost = 3;
  document.getElementById("tier1amt").innerHTML = player.p1;
  document.getElementById("tier1cost").innerHTML = player.p1cost;
}

function reset2() {
  player.p2 = 0;
  player.p2cost = 3;
  document.getElementById("tier2amt").innerHTML = player.p2;
  document.getElementById("tier2cost").innerHTML = player.p2cost;
}

function reset3() {
  player.p3 = 0;
  player.p3cost = 3;
  document.getElementById("tier3amt").innerHTML = player.p3;
  document.getElementById("tier3cost").innerHTML = player.p3cost;
}

function reset4() {
  player.p4 = 0;
  player.p4cost = 3;
  document.getElementById("tier4amt").innerHTML = player.p4;
  document.getElementById("tier4cost").innerHTML = player.p4cost;
}

function reset5() {
  player.p5 = 0;
  player.p5cost = 3;
  document.getElementById("tier5amt").innerHTML = player.p5;
  document.getElementById("tier5cost").innerHTML = player.p5cost;
}

function reset6() {
  player.p6 = 0;
  player.p6cost = 3;
  document.getElementById("tier6amt").innerHTML = player.p6;
  document.getElementById("tier6cost").innerHTML = player.p6cost;
}

function reset7() {
  player.p7 = 0;
  player.p7cost = 3;
  document.getElementById("tier7amt").innerHTML = player.p7;
  document.getElementById("tier7cost").innerHTML = player.p7cost;
}

function reset8() {
  player.p8 = 0;
  player.p8cost = 3;
  document.getElementById("tier8amt").innerHTML = player.p8;
  document.getElementById("tier8cost").innerHTML = player.p8cost;
}

function reset9() {
  player.p9 = 0;
  player.p9cost = 3;
  document.getElementById("tier9amt").innerHTML = player.p9;
  document.getElementById("tier9cost").innerHTML = player.p9cost;
}
