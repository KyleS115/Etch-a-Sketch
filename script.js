function sizeSketchPad() {
    let bodyHeight = parseInt(window.getComputedStyle(body).height) * .75;
    let bodyWidth = parseInt(window.getComputedStyle(body).width);
    if (bodyHeight >= bodyWidth) {
        sideLength += bodyWidth
        sketchPad.style.width = bodyWidth + 'px';
        sketchPad.style.height = bodyWidth + 'px';
    } else {
        sideLength += bodyHeight
        sketchPad.style.width = bodyHeight + 'px';
        sketchPad.style.height = bodyHeight + 'px';
    }
    console.log(bodyWidth)
    console.log(sketchPad.style.width)
    return;
}

function addGrid(rows, columns) {
    while ((rows > 100) || (columns > 100)) {
        alert('# of rows and/or columns exceeding 100 may cause performance issues. Please try again.')
        rows = parseInt(prompt('Enter # of Rows (max 100):'));
        columns = parseInt(prompt('Enter # of Columns (max 100):'))
    }
    for (let a = 1; a <= rows; a++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        sketchPad.appendChild(newRow);
        for (let b = 1; b <= columns; b++) {
            const newRectangle = document.createElement('div');
            newRectangle.classList.add('rectangle');
            let widthOfRectangle = sideLength / columns;
            let heightOfRectangle = sideLength / rows;
            newRectangle.style.width = widthOfRectangle + 'px';
            newRectangle.style.height = heightOfRectangle + 'px';
            newRectangle.style.backgroundColor = 'white';
            newRow.appendChild(newRectangle);
        };
    };
    return;
};

function randomRGB() {
    let colorCode = 'rgb(';
    colorCode += Math.round(Math.random() * 100) + '%, ';
    colorCode += Math.round(Math.random() * 100) + '%, ';
    colorCode += Math.round(Math.random() * 100) + '%)';
    return(colorCode);
};

function reset() {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    };
    addGrid(parseInt(prompt('Enter # of Rows (max 100):')), parseInt(prompt('Enter # of Columns (max 100):')));
    const rectangles = document.querySelectorAll('.rectangle');
    rectangles.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if (div.style.backgroundColor === 'white') {
                div.style.backgroundColor = randomRGB()
            };
        });
    });
    return;
};

currentColor = 'black'
sideLength = 0
const body = document.querySelector('body');
const resetButton = document.getElementById('resetbutton');
const sketchPad = document.getElementById('sketchpad');
const r = document.querySelectorAll('row');
sizeSketchPad()
reset()

resetButton.addEventListener('click', () => {
    reset();
});