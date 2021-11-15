const canvas = document.querySelector('.canvas');
const cells = document.querySelectorAll('.grid-cell');
const ROWS = 32;
const COLS = 32;

function makeCanvas(rows, cols) {
    canvas.style.setProperty('--grid-columns', cols);
    canvas.style.setProperty('--grid-rows', rows);
    
    for(let i = 0; i < (rows * cols); i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener("mouseover", (e) => {
          e.target.style.setProperty('background-color', 'black');
        //   console.log(e.target);
        });
        canvas.appendChild(cell);
    }
}

makeCanvas(ROWS, COLS);


