function sizeSketchPad() {
    let bodyHeight = parseInt(window.getComputedStyle(body).height);
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
            newRectangle.style.outline = '.5px solid black';
            newRow.appendChild(newRectangle);
        };
    };
    return;
};

currentColor = 'black'
sideLength = 0
const body = document.querySelector('body');
const sketchPad = document.getElementById('sketchpad');
sizeSketchPad()
addGrid(16, 16)
const rectangles = document.querySelectorAll('.rectangle');
console.log(rectangles)
rectangles.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = currentColor
    });
});