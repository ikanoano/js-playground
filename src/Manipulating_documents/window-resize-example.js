// dynamically maniplate style
const div = document.querySelector('div');
const resizeDiv = function() {
  let winWidth  = window.innerWidth;
  let winHeight = window.innerHeight;

  div.style.width  = `${winWidth}px`;
  div.style.height = `${winHeight}px`;
};

window.onresize = resizeDiv;
resizeDiv();