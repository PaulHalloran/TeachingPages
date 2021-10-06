var canvas1 = document.getElementById("draw");

var ctx1 = canvas1.getContext("2d");
var rect = canvas1.getBoundingClientRect();

resize();

// resize canvas when window is resized
function resize() {
  ctx1.canvas.width = window.innerWidth;
  ctx1.canvas.height = window.innerHeight;
}

// initialize position as 0,0
var pos = { x: 0, y: 0};


// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further

  // var color = document.getElementById("hex").value;
  color = "#999999"
  ctx1.beginPath(); // begin the drawing path

  ctx1.lineWidth = 6; // width of line
  ctx1.lineCap = "round"; // rounded end cap
  ctx1.strokeStyle = color; // hex color of line

  ctx1.moveTo(pos.x+rect.left, pos.y); // from position
  setPosition(e);
  ctx1.lineTo(pos.x+rect.left, pos.y); // to position

  ctx1.stroke(); // draw it!
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
ctx1.canvas.addEventListener("mousemove", draw);
ctx1.canvas.addEventListener("mousedown", setPosition);
ctx1.canvas.addEventListener("mouseenter", setPosition);
