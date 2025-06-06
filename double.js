const btn = document.getElementById('doubleBtn');
const list = document.getElementById('numList');

btn.addEventListener('click', () => {
  Array.from(list.children).forEach(li => {
    li.textContent = Number(li.textContent) * 2;
  });
}); 