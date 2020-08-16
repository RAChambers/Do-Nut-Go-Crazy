
function update() {
  document.getElementById('text').value = donutcount
  document.text = donutcount + 'Donuts'
  
  document.getElementById('amountAutoClick').innerHTML =
    'You own ' + autoClick + ' Auto Donut Clickers'
  document.amountAutoClick = donutcount + 'Donuts'
  document.getElementById('costAutoClick').innerHTML =
  Math.round(100 * Math.pow(1.1, autoClick)) + ' Donuts'
  document.costAutoClick = costAutoClick - donutcount + 'Donuts'

  document.getElementById('amountAutoMultiplier').innerHTML =
  'You Own ' + autoMultiplier + ' Donut Multipliers!'
  document.amountAutoMultiplier = donutcount + 'Donuts'
  document.getElementById('costAutoMultiplier').innerHTML =
  Math.round(20 * Math.pow(1.2, autoMultiplier)) + ' Donuts'
  document.costAutoMultiplier = costAutoMultiplier - donutcount + 'Donuts'

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
  if (donutcount >=  100 * Math.pow(1.1, autoClick)) {
    donutcount = donutcount - Math.round(100 * Math.pow(1.1, autoClick) )
    autoClick = autoClick + 1
    update()
  }
}
var donutcount = 0
var autoMultiplier = 0
function timer() {
  donutcount = donutcount + autoMultiplier
  update()
}


function save() {
  localStorage.setItem('donutcount', donutcount)
  localStorage.setItem('autoMultiplier', autoMultiplier)
}
function load() {
  donutcount = localStorage.getItem('donutcount')
  donutcount = parseInt(donutcount)
  autoMultiplier = localStorage.getItem('autoMultiplier')
  autoMultiplier = parseInt(autoMultiplier)
  update()
}
function buyAutoMultiplier() {
  if (donutcount >= 20 * Math.pow(1.2, autoMultiplier)) {
    donutcount = donutcount - Math.round(20 * Math.pow(1.2, autoMultiplier))
    autoMultiplier = autoMultiplier + 1
    update()
  }
}
