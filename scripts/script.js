const canvas = document.querySelector('.canvas');
const cells = document.querySelectorAll('.grid-cell');
const range = document.querySelector('#grid-size');
const rangeOutput = document.querySelector('.range-output');
const colorPicker = document.querySelector('#color-picker');
let color = '#000';
const ROWS = 32;
const COLS = 32;
// let color = document.styleSheets.item("--color-paint")

/**
 * Helper function to remove all child nodes
 * @param {Node} parent 
 */
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeCanvas(rows, cols) {
    canvas.style.setProperty('--grid-columns', cols);
    canvas.style.setProperty('--grid-rows', rows);
    removeAllChildNodes(canvas);
    
    for(let i = 0; i < (rows * cols); i++){        
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener("mouseover", (e) => {
          e.target.style.setProperty('background-color', color);
        });
        canvas.appendChild(cell);
    }
}

makeCanvas(ROWS, COLS);

/**
 * Range input controls:
 * 
 * input event is instantaneous and will cause an overhead
 * if we apply canvas change here. 
 * Instead we will output a div that output grid size.
 */

range.addEventListener('mousemove', (e) => {
    console.log(e.clientX, e.clientY);
    // rangeOutput.style.top = e.clientY - 20 + "px";
    rangeOutput.style.left = e.clientX + 10 + "px";
});

range.addEventListener('mouseover', (e) => {
    rangeOutput.style.display = 'block';
});

range.addEventListener('mouseleave', (e) => {
    rangeOutput.style.display = 'none';
})

range.addEventListener('input', (e) => {    
    rangeOutput.textContent = `${e.target.value}x${e.target.value}`;

});

range.addEventListener('change', (e) => {
    makeCanvas(e.target.value, e.target.value);    
});

colorPicker.addEventListener('change', (e) => {
    // console.log(e.target.value);
    color = e.target.value;
})


