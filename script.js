// Dark mode toggle button 
const toggle = document.querySelector('.toggle-btn');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '🌞';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  const isDark = body.classList.contains('dark');
  toggle.textContent = isDark ? '🌞' : '🌙';

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
// Dark mode toggle button end

const container = document.querySelector(".container");

const totalSquares = 16 * 16;

for (let i = 0; i < totalSquares; i++){
  const sq = document.createElement('div');
  container.appendChild(sq);
  
}
