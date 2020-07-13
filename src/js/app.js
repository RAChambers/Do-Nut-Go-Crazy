// import { DonutMaker } from "./DonutMaker.js";
// import { HtmlWiringHelper } from "./HtmlWiringHelper.js";
// const donutMaker = new DonutMaker();
// const wiringHelper = new HtmlWiringHelper(donutMaker);
// const donutCount = document.querySelector(".donut-count");
// const clickimg = document.querySelector(".click-img");

// clickimg.addEventListener("click", () => {
//   donutMaker.recordClick();
//   wiringHelper.updateDonutCountDisplay(donutCount);
// });
function update() {
  document.getElementById('text').value = donutcount
  document.text = donutcount + 'Donuts'
  
  document.getElementById('amountAutoClick').innerHTML =
    'You own ' + autoClick + ' Auto Donut Clickers'
  document.amountAutoClick = donutcount + 'Donuts'
  document.getElementById('costAutoClick').innerHTML =
  Math.round(10 * Math.pow(1.1, autoClick)) + ' Donuts'
  document.costAutoClick = costAutoClick - donutcount + 'Donuts'

  document.getElementById('costDonutMultiplier').innerHTML =
  Math.round(20 * Math.pow(2.0,donutMultiplier)) + 'Donuts'
}

var donutcount = 0
var autoClick = 0
function timer() {
  donutcount = donutcount + autoClick
  update()
}
setInterval(timer, 1000)
function openTab(tabName) {
  var i, x
  x = document.getElementsByClassName('containerTab')
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  document.getElementById(tabName).style.display = 'block'
}

function add() {
  donutcount = donutcount + 1
  update()
}
function save() {
  localStorage.setItem('donutcount', donutcount)
  localStorage.setItem('autoClick', autoClick)
}
function load() {
  donutcount = localStorage.getItem('donutcount')
  donutcount = parseInt(donutcount)
  autoClick = localStorage.getItem('autoClick')
  autoClick = parseInt(autoClick)
  update()
}
function buyAutoClick() {
  if (donutcount >=  10 * Math.pow(1.1, autoClick)) {
    donutcount = donutcount - Math.round(10 * Math.pow(1.1, autoClick) )
    autoClick = autoClick + 1
    update()
  }
}

function save() {
  localStorage.setItem('donutcount', donutcount)
  localStorage.setItem('donutMultiplier', donutMultiplier)
}
function load() {
  donutcount = localStorage.getItem('donutcount')
  donutcount = parseInt(donutcount)
  donutMultiplier = localStorage.getItem('donutMultiplier')
  donutMultiplier = parseInt(donutMultiplier)
  update()
}
function buyDonutMultiplier() {
  if (donutcount >= 20 * Math.round(2.0,donutMultiplier)) {
    donutcount = donutcount - Math.round(20 * Math.pow(2.0, donutMultiplier))
    donutMultiplier = donutMultiplier + 1
    update()
  }
}
