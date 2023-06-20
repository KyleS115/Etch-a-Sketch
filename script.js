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
        sketchPad.appendChild(newRow);
        for (let b = 1; b <= columns; b++) {
            const newSquare = document.createElement('div');
            let widthOfSquare = sideLength / columns;
            let heightOfSquare = sideLength / rows;
            newSquare.style.width = widthOfSquare + 'px';
            newSquare.style.height = heightOfSquare + 'px';
            newSquare.style.outline = '.5px solid black';
            newRow.appendChild(newSquare);
        };
    };
    return;
};

sideLength = 0
const body = document.querySelector('body');
const sketchPad = document.getElementById('sketchpad');
sizeSketchPad()
addGrid(16, 16)