function sizeSketchPad() {
    // Scales the sketchpad area based off the current viewport size
    // Updates the sketchPadLength global var for use in the addGrid() function
    let bodyHeight = parseInt(window.getComputedStyle(body).height) * .75;
    let bodyWidth = parseInt(window.getComputedStyle(body).width);
    if (bodyHeight >= bodyWidth) {
        sketchPadLength = bodyWidth
        sketchPad.style.width = bodyWidth + 'px';
        sketchPad.style.height = bodyWidth + 'px';
    } else {
        sketchPadLength = bodyHeight
        sketchPad.style.width = bodyHeight + 'px';
        sketchPad.style.height = bodyHeight + 'px';
    }
    return;
}

function addGrid(squaresPerSide) {
    // Adds a grid with (squaresPerSide) rows and columns
    while ((squaresPerSide < 0) || (squaresPerSide > 100)) {
        alert('ERROR: Input must be non-negative and less than 100. Please try again.')
        squaresPerSide = parseInt(prompt('Enter size of grid (max 100):'));
    }
    for (let a = 1; a <= squaresPerSide; a++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        sketchPad.appendChild(newRow);
        for (let b = 1; b <= squaresPerSide; b++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            let sideOfSquare = sketchPadLength / squaresPerSide;
            newSquare.style.width = sideOfSquare + 'px';
            newSquare.style.height = sideOfSquare + 'px';
            newSquare.style.backgroundColor = 'white';
            newSquare.style.filter = 'brightness(100%)';
            newRow.appendChild(newSquare);
        };
    };
    return;
};

function randomRGB() {
    // returns a randomized RGB code for use in the reset() function
    let colorCode = 'rgb(';
    colorCode += (Math.random() * 100) + '%, ';
    colorCode += (Math.random() * 100) + '%, ';
    colorCode += (Math.random() * 100) + '%)';
    return(colorCode);
};

function reset() {
    // removes all existing elements within sketchpad and creates a new grid
    // adds new event listener for each square
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    };
    addGrid(parseInt(prompt('Enter size of grid (max 100):')));
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if (square.style.backgroundColor === 'white') {
                square.style.backgroundColor = randomRGB()
            } else {
                currentFilterLength = square.style.filter.length;
                currentFilter = parseInt(square.style.filter.slice(11, currentFilterLength - 2));
                if (currentFilter > 0) {
                    square.style.filter = 'brightness(' + (currentFilter - 10) + '%)';
                    console.log(square.style.filter);
                };
            };
        });
    });
    return;
};

sketchPadLength = 0
const body = document.querySelector('body');
const resetButton = document.getElementById('resetbutton');
const sketchPad = document.getElementById('sketchpad');
const r = document.querySelectorAll('row');
sizeSketchPad()
reset()

resetButton.addEventListener('click', () => {
    reset();
});