import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery .gallery-link', {
  className: 'gallery-link',
  closeText: ['<i class="fa fa-times">&#10006;</i>'],
  navText: ['<i class="fa fa-angle-left">&lt;</i>','<i class="fa fa-angle-right">&gt;</i>'],
  captionsData: 'alt',
  captionDelay: 250
});

export const createHTML = (images) => {

 const galleryImages = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
    return `<a class="gallery-link" href="${largeImageURL}">
                          <img
                            class="gallery-image"
                            src="${webformatURL}"
                            alt="${tags}"
                          />
                          <figcaption class="gallery__figcaption">
                             <div class="gallery__caption">Likes: <span>${likes}</span></div>
                             <div class="gallery__caption">Views: <span>${views}</span></div>
                             <div class="gallery__caption">Comments: <span>${comments}</span></div>
                             <div class="gallery__caption">Downloads: <span>${downloads}</span></div>
                          </figcaption>
                        </a>`;
  }).join("");

  gallery.insertAdjacentHTML("beforeend", galleryImages);
  lightbox.refresh();
}