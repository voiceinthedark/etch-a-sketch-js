const canvas = document.querySelector('.canvas');
const ROWS = 16;
const COLS = 16;

function makeCanvas(rows, cols) {
    canvas.style.setProperty('--grid-columns', cols);
    canvas.style.setProperty('--grid-rows', rows);

    for(let i = 0; i < (rows * cols); i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        canvas.appendChild(cell);
    }
}

makeCanvas(ROWS, COLS);