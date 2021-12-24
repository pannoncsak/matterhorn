(function (date, time) {
  date.textContent = new Date().toISOString().substring(0, 10);
  time.textContent = new Date().toTimeString().split(' ')[0];
  setInterval(function () {
    time.textContent = new Date().toTimeString().split(' ')[0];
  }, 1000);
})(document.getElementById('date'), document.getElementById('time'));