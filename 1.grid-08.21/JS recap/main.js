function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
let isColonVisible = true;
function updateTime() {
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;

  if (!isColonVisible) {
    time = h + ":" + m + s;
  }
  document.getElementById("time").innerHTML = time;
}

function toggleColonVisibility() {
  isColonVisible = !isColonVisible;
}
updateTime();
setInterval(updateTime, 1000);
setInterval(toggleColonVisibility, 500);
