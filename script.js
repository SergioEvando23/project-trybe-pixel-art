for ( let i = 0; i < 4; i += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.class = 'color';
    document.getElementById('color-palette').appendChild(div);
}

document.querySelectorAll('.color')[0].style.backgroundColor = '#000000';
document.querySelectorAll('.color')[1].style.backgroundColor = '#7FFFD4';
document.querySelectorAll('.color')[2].style.backgroundColor = '#DAA520';
document.querySelectorAll('.color')[3].style.backgroundColor = '#FF00FF';

for (let i1 = 0; i1 < 5; i1 += 1) {
    const pixelLine = document.createElement('section');
    pixelLine.id = 'pixel-line';
    document.getElementById('pixel-board').appendChild(pixelLine);
    for (let i2 = 0; i2 < 5; i2 += 1) {
        const divPixel = document.createElement('div');
        divPixel.className = 'pixel';
        divPixel.style.backgroundColor = '#FFFFFF';
        document.querySelectorAll('#pixel-line')[i1].appendChild(divPixel);
    };
}

const selectedColor = document.querySelectorAll('.color')[0].style.backgroundColor;
selectedColor.className = 'selected';
