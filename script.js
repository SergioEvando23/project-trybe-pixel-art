document.querySelectorAll('.color')[0].style.backgroundColor = '#000000';
document.querySelectorAll('.color')[1].style.backgroundColor = '#7FFFD4';
document.querySelectorAll('.color')[2].style.backgroundColor = '#DAA520';
document.querySelectorAll('.color')[3].style.backgroundColor = '#FF00FF';

let pixelLine = document.createElement('section');

for (let i1 = 0; i1 <= 5; i1 += 1) {
    pixelLine.id = 'pixel-line';    
    document.getElementById('pixel-board').appendChild(pixelLine);
    
    for (let i2 = 0; i2 <= 5; i2 += 1) {
        let divPixel = document.createElement('div');
        divPixel.className = 'color';
        document.getElementById('pixel-line').appendChild(divPixel);
    }
}

