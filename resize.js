const square = document.getElementById('square');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

let size = 60;
const step = 15;

function updateSquare() {
  square.style.width = size + 'px';
  square.style.height = size + 'px';
}

updateSquare();

decreaseBtn.addEventListener('click', () => {
  if (size > step) size -= step;
  updateSquare();
});

increaseBtn.addEventListener('click', () => {
  size += step;
  updateSquare();
}); 