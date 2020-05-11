var deadline = 'July 4 2020 12:00:00 GMT-0700'
var clock = [
  document.getElementById("w"),
  document.getElementById("d"),
  document.getElementById("h"),
  document.getElementById("m"),
  document.getElementById("s")
]

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date())
  var seconds = Math.floor((t/1000) % 60)
  var minutes = Math.floor((t/1000/60) % 60)
  var hours = Math.floor((t/(1000*60*60)) % 24)
  var days = Math.floor(t/(1000*60*60*24) % 30.4375)
  var months = Math.floor(t/(1000*60*60*24*30.4375))
  return {
    'total': t,
    'months': months,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function initializeClock(){
  var timeinterval = setInterval(() => {
    var t = getTimeRemaining(deadline)
    clock[0].innerHTML = t.months + 'M'
    clock[1].innerHTML = t.days + 'D'
    clock[2].innerHTML = t.hours + 'H'
    clock[3].innerHTML = t.minutes + 'M'
    clock[4].innerHTML = t.seconds + 'S'
    if(t.total<=0){
      clearInterval(timeinterval)
    }
  },1)
}

initializeClock()