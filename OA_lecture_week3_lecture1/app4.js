var canvas4 = document.getElementById("draw4");

var ctx4 = canvas4.getContext("2d");
var rect4 = canvas4.getBoundingClientRect();

resize4();

// resize canvas when window is resized
function resize4() {
  ctx4.canvas.width = window.innerWidth;
  ctx4.canvas.height = window.innerHeight;
}

// initialize position as 0,0
var pos4 = { x4: 0, y4: 0};


// new position from mouse events
function setPosition4(e4) {
  pos4.x4 = e4.clientX;
  pos4.y4 = e4.clientY;
}

function draw4(e4) {
  if (e4.buttons !== 1) return; // if mouse is not clicked, do not go further

  // var color = document.getElementById("hex").value;
  color4 = "#999999"
  ctx4.beginPath(); // begin the drawing path

  ctx4.lineWidth = 6; // width of line
  ctx4.lineCap = "round"; // rounded end cap
  ctx4.strokeStyle = color4; // hex color of line

  ctx4.moveTo(pos4.x4+rect4.left, pos4.y4); // from position
  setPosition4(e4);
  ctx4.lineTo(pos4.x4+rect4.left, pos4.y4); // to position

  ctx4.stroke(); // draw it!
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize4);

// add event listeners to trigger on different mouse events
ctx4.canvas.addEventListener("mousemove", draw4);
ctx4.canvas.addEventListener("mousedown", setPosition4);
ctx4.canvas.addEventListener("mouseenter", setPosition4);
