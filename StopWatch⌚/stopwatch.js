let h = 0;
let m = 0;
let s = 0;
let counter = 0;
let timer = false;

function stopwatch() {
  if (timer == true) {
    counter = counter + 1;
    if (counter == 100) {
      s = s + 1;
      counter = 0;
    }
    if (s == 60) {
      m = m + 1;
      s = 0;
    }
    if (m == 60) {
      h = h + 1;
      m = 0;
    }
    let hstr = h;
    let mstr = m;
    let sstr = s;
    let counterstr = counter;

    if (hstr < 10) {
      hstr = "0" + h;
    }
    if (mstr < 10) {
      mstr = "0" + m;
    }
    if (sstr < 10) {
      sstr = "0" + s;
    }
    if (counterstr < 10) {
      counterstr = "0" + s;
    }
    document.getElementById("h").innerHTML = hstr;
    document.getElementById("m").innerHTML = mstr;
    document.getElementById("s").innerHTML = sstr;
    document.getElementById("counter").innerHTML = counterstr;
    setTimeout("stopwatch()",10)
  }
}
function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
  
}

function reset() {
  timer = false;
  h = 0;
  m = 0;
  counter = 0;
  s = 0;
  document.getElementById("h").innerHTML = "00";
  document.getElementById("m").innerHTML = "00";
  document.getElementById("s").innerHTML = "00";
  document.getElementById("counter").innerHTML = "00";

}
