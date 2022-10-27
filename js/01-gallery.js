import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const imageEl = galleryItems.map(({preview, original, description}) => 
    
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");

galleryEl.insertAdjacentHTML('beforeend', imageEl);

galleryEl.addEventListener('click', showBigImage)

function showBigImage(evt) {
    evt.preventDefault();
    
    if (evt.target.nodeName === 'IMG') {
        const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);
        
        instance.show(() => window.addEventListener('keydown', onEscPress));

        function onEscPress(evt) {
            if (evt.code === 'Escape') {
        instance.close(() => window.removeEventListener('keydown', onEscPress));
            }
        }
    }
}

