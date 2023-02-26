import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', itemsMarkup);

galleryContainerEl.addEventListener('click', handleGalleryContainerElClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `;
    })
    .join('');
}

function handleGalleryContainerElClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(event.target.dataset.source);
}

console.log(galleryItems);
