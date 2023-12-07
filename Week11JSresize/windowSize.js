"use strict";

window.onload = function getSize() {
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;
  document.getElementById('wh').innerHTML = "<h1> width: " + w + "<br />" + "height: " + h + "</h1>";
  window.addEventListener('resize', getSize);
}


