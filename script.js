for (let i = 0; i < 4; i += 1) {
  const div = document.createElement('div');
  div.className = 'color';
  div.class = 'color';
  document.getElementById('color-palette').appendChild(div);
}

const colorPalette = document.getElementById('color-palette');

const pixelColor1 = document.querySelectorAll('.color')[0];
pixelColor1.style.backgroundColor = '#000000';
const pixelColor2 = document.querySelectorAll('.color')[1];
pixelColor2.style.backgroundColor = '#7FFFD4';
const pixelColor3 = document.querySelectorAll('.color')[2];
pixelColor3.style.backgroundColor = '#DAA520';
const pixelColor4 = document.querySelectorAll('.color')[3];
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

function onSelectedLoad() {
  pixelColor1.classList.add('selected');
}

window.onload = onSelectedLoad;

colorPalette.addEventListener('click', ({ target }) => {
  const pixelSelected = document.querySelector('.selected');
  pixelSelected.classList.remove('selected');
  target.classList.add('selected');
});

pixelBoard.addEventListener('click', ({ target }) => {
  const pixelClicked = target;
  if (target.classList.contains('pixel')) {
    const pixelSelected = document.querySelector('.selected');
    const color = pixelSelected.style.backgroundColor;
    pixelClicked.style.backgroundColor = color;
  }
});

const button = document.getElementById('clear-board');

function clearPixel() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let ind = 0; ind < allPixels.length; ind += 1) {
    allPixels[ind].style.backgroundColor = '#ffffff';
  }
}

button.addEventListener('click', clearPixel);

const buttonVQV = document.getElementById('generate-board');

buttonVQV.addEventListener('click', () => {
  let { value: inputValuePixel } = document.getElementById('board-size');
  if (inputValuePixel === '') {
    alert('Board inválido!');
  } else {
    pixelBoard.innerText = '';
    PixelGenerator(inputValuePixel * inputValuePixel);
    inputValuePixel = '';
  }
});
