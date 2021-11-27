for (let i = 0; i < 4; i += 1) {
  const div = document.createElement('div');
  div.className = 'color';
  div.class = 'color';
  document.getElementById('color-palette').appendChild(div);
}

const pixelColor1 = document.querySelectorAll('.color')[0]
pixelColor1.style.backgroundColor = '#000000';
const pixelColor2 = document.querySelectorAll('.color')[1]
pixelColor2.style.backgroundColor = '#7FFFD4';
const pixelColor3 = document.querySelectorAll('.color')[2]
pixelColor3.style.backgroundColor = '#DAA520';
const pixelColor4 = document.querySelectorAll('.color')[3]
pixelColor4.style.backgroundColor = '#FF00FF';


const pixelBoard = document.getElementById('pixel-board');

function PixelGenerator(length) {
  for (let i1 = 0; i1 < length; i1 += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = '#FFFFFF';
    pixelBoard.style.width = `${Math.sqrt(length) * 40}px`;
    pixelBoard.appendChild(pixel);
  }
}

PixelGenerator(25);

window.onload = onSelectedLoad;

function onSelectedLoad(){
  pixelColor1.classList.add('selected');
}

// const selectedColor = document.querySelectorAll('.color')[0].style.backgroundColor;
// selectedColor.className = 'selected';

