import { getAllImages } from './js/pixabay-api.js';
import { createHTML } from './js/render-function.js';
import { params } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.form');
const loadImagesButton = document.getElementById('get-images');
const loader = document.querySelector('.loader');

const per_page = 15;

const getImages = async () => {
  const searchInput = document.querySelector("[name='search']");

  if (searchInput.value.trim() !== '') {
    loader.style.display = 'block';
    try{
      const res = await getAllImages(searchInput.value.trim());

      const totalPages = Math.ceil(res.totalHits / per_page);

      if(params.page >= totalPages) {
        loadImagesButton.style.display = 'none';
        createHTML(res.hits);
        if (parseInt(res.totalHits) <= 0){
          loader.style.display = 'none';
          return resultError('Sorry, there are no images matching your search query. Please try again!');
        }
        loader.style.display = 'none';
        return resultError('We are sorry, but you\'ve reached the end of search results.')
      }
      loadImagesButton.style.display = 'inline-block';
      createHTML(res.hits);
      loader.style.display = 'none';

    }catch (error){
      loader.style.display = 'none';
      console.error(error.message);
      resultError(error.message);
    }
  }else {
    loader.style.display = 'none';
    resultError('The field cannot be empty');
  }
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  loadImagesButton.style.display = 'none';

  params.per_page = per_page;
  params.page = 1;

  document.querySelector('.gallery').innerHTML = '';

  getImages();
});

loadImagesButton.addEventListener("click", () => {
  params.per_page = per_page;
  params.page++;

  const lastElement = document.querySelector(".gallery-link");
  let rect = lastElement.getBoundingClientRect();

  getImages();

  setTimeout(() => {
    window.scrollBy({
      // top: rect.height*2,
      top: 850,
      behavior: 'smooth'
    })
  }, "500");

})

//Loading when scrolling
// window.addEventListener('scroll', () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     params.per_page = per_page;
//     params.page++;
//     getImages();
//   }
// })

const resultError = (errorMsg) => {
  iziToast.error({
    message: errorMsg,
    position: 'topRight',
    timeout: 5000
  })
}