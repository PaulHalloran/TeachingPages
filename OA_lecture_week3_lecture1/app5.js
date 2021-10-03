var canvas5 = document.getElementById("draw5");

var ctx5 = canvas5.getContext("2d");
var rect5 = canvas5.getBoundingClientRect();

resize5();

// resize canvas when window is resized
function resize5() {
  ctx5.canvas.width = window.innerWidth;
  ctx5.canvas.height = window.innerHeight;
}

// initialize position as 0,0
var pos5 = { x: 0, y: 0};


// new position from mouse events
function setPosition5(e) {
  pos5.x = e.clientX;
  pos5.y = e.clientY;
}

function draw5(e) {
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further

  // var color = document.getElementById("hex").value;
  color5 = "#FF0000"
  ctx5.beginPath(); // begin the drawing path

  ctx5.lineWidth = 7; // width of line
  ctx5.lineCap = "round"; // rounded end cap
  ctx5.strokeStyle = color5; // hex color of line

  ctx5.moveTo(pos5.x+rect5.left, pos5.y); // from position
  setPosition5(e);
  ctx5.lineTo(pos5.x+rect5.left, pos5.y); // to position

  ctx5.stroke(); // draw it!
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize5);

// add event listeners to trigger on different mouse events
ctx5.canvas.addEventListener("mousemove", draw5);
ctx5.canvas.addEventListener("mousedown", setPosition5);
ctx5.canvas.addEventListener("mouseenter", setPosition5);
