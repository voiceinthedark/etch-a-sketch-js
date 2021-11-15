const canvas = document.querySelector('.canvas');
const cells = document.querySelectorAll('.grid-cell');
const range = document.querySelector('#grid-size');
const rangeOutput = document.querySelector('.range-output');
const colorPicker = document.querySelector('#color-picker');
const rainbowColorButton = document.querySelector('#incremental-color');
let color = '#000';
let incrementalColor = {
    r: 255,
    g: 0,
    b: 0,
};
let incrementalColorFlag = false;
const ROWS = 32;
const COLS = 32;

/**
 * Helper function to remove all child nodes
 * @param {Node} parent 
 */
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/**
 * 
 * @param {int} r 0 <= r <= 255 
 * @param {int} g 0 <= g <= 255
 * @param {int} b 0 <= b <= 255
 * @returns a string representing an RGB color
 */
function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

function makeCanvas(rows, cols) {
    canvas.style.setProperty('--grid-columns', cols);
    canvas.style.setProperty('--grid-rows', rows);
    removeAllChildNodes(canvas);       
    
    for(let i = 0; i < (rows * cols); i++){        
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener("mouseover", (e) => {
            if (incrementalColorFlag) {
              color = rgb(incrementalColor.r, incrementalColor.g, incrementalColor.b);
              incrementalColor.r = (incrementalColor.r + 151) % 255;
              incrementalColor.g = (incrementalColor.g + 102) % 255;
              incrementalColor.b = (incrementalColor.b + 51) % 255;
            }
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
    // console.log(e.clientX, e.clientY);
    rangeOutput.style.top = e.clientY - 10 + "px";
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

/**
 * color picker methods
 */

colorPicker.addEventListener('change', (e) => {
    // console.log(e.target.value);
    color = e.target.value;
});

/**
 * rainbow button methods
 */

rainbowColorButton.addEventListener('click', (e) => {
    incrementalColorFlag = !incrementalColorFlag;   
    console.log(incrementalColorFlag); 
});


