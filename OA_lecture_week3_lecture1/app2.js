var canvas = document.getElementById("draw2");

var ctx2 = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();

resize();

// resize canvas when window is resized
function resize() {
  ctx2.canvas.width = window.innerWidth;
  ctx2.canvas.height = window.innerHeight;
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
  ctx2.beginPath(); // begin the drawing path

  ctx2.lineWidth = 6; // width of line
  ctx2.lineCap = "round"; // rounded end cap
  ctx2.strokeStyle = color; // hex color of line

  ctx2.moveTo(pos.x+rect.left, pos.y); // from position
  setPosition(e);
  ctx2.lineTo(pos.x+rect.left, pos.y); // to position

  ctx2.stroke(); // draw it!
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
ctx2.canvas.addEventListener("mousemove", draw);
ctx2.canvas.addEventListener("mousedown", setPosition);
ctx2.canvas.addEventListener("mouseenter", setPosition);
