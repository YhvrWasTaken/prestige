function win() {
  if (player.p9 >= 3) {
    player.money = 0;
    reset1()
    reset2()
    reset3()
    reset4()
    reset5()
    reset6()
    reset7()
    reset8()
    reset9()
    player.victories += 1
    player.tickspeed = player.tickspeed / 2
    clearInterval(timer)
    timer = window.setInterval(updatescreen, player.tickspeed);
    document.getElementById("winamt").innerHTML = player.victories;
  }
}
