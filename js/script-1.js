function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorPalette = document.querySelector('.boxes');
const colorBoxesList = [];

for (let i = 0; i < 60; i += 1) {
  const color = getRandomHexColor();
  const colorCard = `
         <div class="box">
        <div class="color"
        data-color = '${color}';
        style='background-color: ${color}'></div>
        <p>Press color!</p>
        <p>Color: ${color}</p>
    </div>
        `;
  colorBoxesList.push(colorCard);
}

colorPalette.insertAdjacentHTML('beforeend', colorBoxesList.join(''));

colorPalette.addEventListener('click', onColorBoxChenge);

function onColorBoxChenge(evt) {
    if (!evt.target.classList.contains('color')) {
        return;
    }

    const currentColorCard = document.querySelector('.box.is-active');

    if (currentColorCard) {
        currentColorCard.classList.remove('is-active');
    }

        const parentColorCard = evt.target.closest('.box');

        parentColorCard.classList.add('is-active');

    document.body.style.backgroundColor = evt.target.dataset.color;
    console.log(currentColorCard);

}


