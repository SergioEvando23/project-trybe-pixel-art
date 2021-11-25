for (let i = 0; i < 4; i += 1) {
  const div = document.createElement('div');
  div.className = 'color';
  div.class = 'color';
  document.getElementById('color-palette').appendChild(div);
}

document.querySelectorAll('.color')[0].style.backgroundColor = '#000000';
document.querySelectorAll('.color')[1].style.backgroundColor = '#7FFFD4';
document.querySelectorAll('.color')[2].style.backgroundColor = '#DAA520';
document.querySelectorAll('.color')[3].style.backgroundColor = '#FF00FF';
const pixelBoard = document.getElementById('pixel-board');

function PixelGenerator(length) {
  for (let i1 = 0; i1 < length; i1 += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.style.width = `${Math.sqrt(length) * 40}px`;
    pixelBoard.appendChild(pixel);
  }
}

PixelGenerator(25);

// const inputSize = document.getElementById('board-size');
// const buttonSendSize = document.getElementById('send-board-size');
// buttonSendSize.addEventListener('click', PixelGenerator);

const selectedColor = document.querySelectorAll('.color')[0].style.backgroundColor;
selectedColor.className = 'selected';
