import { fetchImages } from './js/pixabay-api.js';
import { showMessage } from './js/render-functions.js';
import { createImageCard } from './js/render-functions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {});

function showLoader() {
  loader.style.display = 'block';
}
function hideLoader() {
  loader.style.display = 'none';
}

searchForm.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  
  const query = event.target.search.value.trim();
  
  if (!query) {
    showMessage('Please enter a search query');
    return;
  }
  
  try {
    showLoader();
    gallery.innerHTML = '';
    
    const images = await fetchImages(query);
    if (images.length === 0) {
      showMessage('Sorry, there are no images matching your search query. Please try again!');
    } else {
      renderGallery(images);
    }
  } catch (error) {
    showMessage('An error occurred while fetching images. Please try again later.');
  } finally {
    hideLoader();
  }
}

function renderGallery(images) {
  const cardsMarkup = images.map(createImageCard).join('');
  gallery.insertAdjacentHTML('beforeend', cardsMarkup);
  
  lightbox.refresh();
}