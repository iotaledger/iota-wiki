const container = document.createElement('div');
container.classList.add('fullscreen-image-container');

const image = document.createElement('img');
image.classList.add('fullscreen-image-container__image');

container.appendChild(image);

function openImage(event) {
  container.classList.add('fullscreen-image-container--active');
  image.src = event.target.src;
}

function closeImage() {
  container.classList.remove('fullscreen-image-container--active');
}

window.onload = () => {
  document
    .querySelectorAll('.markdown img')
    .forEach((element) => element.addEventListener('click', openImage));

  container.addEventListener('click', closeImage);

  document.body.appendChild(container);
};
