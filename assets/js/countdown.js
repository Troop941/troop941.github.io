var deadline = 'July 4 2020 12:00:00 GMT-0700';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var miliseconds = t % 1000;
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) % 30.4375);
  var months = Math.floor( t/(1000*60*60*24*30.4375));
  return {
    'total': t,
    'months': months,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
    'miliseconds': miliseconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(() => {
    var t = getTimeRemaining(endtime);
    clock.innerHTML = 'months: ' + t.months + '<br>' +
                      'days: ' + t.days + '<br>' +
                      'hours: '+ t.hours + '<br>' +
                      'minutes: ' + t.minutes + '<br>' +
                      'seconds: ' + t.seconds+ '<br>' +
                      'miliseconds: ' + t.miliseconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1);
}

initializeClock('wente', deadline);