var canvas = document.getElementById("draw3");

var ctx3 = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();

resize();

// resize canvas when window is resized
function resize() {
  ctx3.canvas.width = window.innerWidth;
  ctx3.canvas.height = window.innerHeight;
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
  ctx3.beginPath(); // begin the drawing path

  ctx3.lineWidth = 6; // width of line
  ctx3.lineCap = "round"; // rounded end cap
  ctx3.strokeStyle = color; // hex color of line

  ctx3.moveTo(pos.x+rect.left, pos.y); // from position
  setPosition(e);
  ctx3.lineTo(pos.x+rect.left, pos.y); // to position

  ctx3.stroke(); // draw it!
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
ctx3.canvas.addEventListener("mousemove", draw);
ctx3.canvas.addEventListener("mousedown", setPosition);
ctx3.canvas.addEventListener("mouseenter", setPosition);
