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


let gridSize  = 16;


function updateGrid(size){
  const container = document.querySelector(".container");

  container.replaceChildren();
  container.style.gridTemplateColumns = `repeat(${size}, minmax(0, 1fr))`;
  container.style.gridTemplateRows = `repeat(${size}, minmax(0, 1fr))`;


  for(let i = 0; i < size * size; i++){
    container.appendChild(document.createElement("div"));  
  }
}


const gridBtn = document.querySelector(".set");



gridBtn.addEventListener("click", () => {
   let gridVal =  prompt("Enter the number of square you prefer for the new grid");

   if(gridVal >= 2 && gridVal <= 100){
    const newSize = Number(gridVal);
    updateGrid(newSize);
   } else{
    alert("Please enter a number between 2 to 100");
   }
})




updateGrid(gridSize);



