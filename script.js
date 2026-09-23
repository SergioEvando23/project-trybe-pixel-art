const faberCastellColors = [
  ['Preto', '#000000'], ['Cinza', '#7A7A7A'], ['Marrom', '#7A3E1D'],
  ['Marrom-claro', '#B87333'], ['Bege', '#E6C99A'], ['Amarelo', '#F7D21B'],
  ['Amarelo-ouro', '#E6A817'], ['Laranja', '#F58220'], ['Vermelho', '#D8232A'],
  ['Vermelho-carmim', '#A61F3D'], ['Rosa', '#F06A9A'], ['Rosa-claro', '#F6B1C3'],
  ['Violeta', '#6D3B8E'], ['Roxo', '#8B4FA3'], ['Azul-escuro', '#173E79'],
  ['Azul', '#2168B1'], ['Azul-claro', '#69B9E7'], ['Turquesa', '#37B9B6'],
  ['Verde-escuro', '#236B3C'], ['Verde', '#45A44B'], ['Verde-claro', '#9DCB4C'],
  ['Oliva', '#8A8F3A'], ['Pêssego', '#F0A57A'], ['Branco', '#FFFFFF'],
];

for (let i = 0; i < faberCastellColors.length; i += 1) {
  const div = document.createElement('div');
  div.className = 'color';
  div.class = 'color';
  div.style.backgroundColor = faberCastellColors[i][1];
  div.setAttribute('aria-label', faberCastellColors[i][0]);
  div.setAttribute('title', faberCastellColors[i][0]);
  document.getElementById('color-palette').appendChild(div);
}

const boardPixel = document.getElementById('board-pixel');

const colorPalette = document.getElementById('color-palette');

const pixelColor1 = document.querySelectorAll('.color')[0];

const pixelBoard = document.getElementById('pixel-board');

function PixelGenerator(length) {
  for (let i1 = 0; i1 < length; i1 += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = '#FFFFFF';
    pixelBoard.style.width = `${Math.sqrt(length) * 40}px`;
    pixelBoard.style.height = `${Math.sqrt(length) * 40}px`;
    pixelBoard.appendChild(pixel);
  }
}

PixelGenerator(25);

function onSelectedLoad() {
  const widthBoard = 25 * 40 - 740;
  boardPixel.style.width = widthBoard + "px";
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
  const widthBoard = (inputValuePixel * 40) + 60;
  if (inputValuePixel === '') {
    alert('Board inválido!');
  } else {
    pixelBoard.innerText = '';
    PixelGenerator(inputValuePixel * inputValuePixel);
    console.log(inputValuePixel, 'input value')
    boardPixel.style.width = widthBoard + "px";
    inputValuePixel = '';
  }
});
