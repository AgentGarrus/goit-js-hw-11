import { fetchImages } from './js/pixabay-api.js';
import { showMessage } from './js/render-functions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function showLoader() {
  loader.style.display = 'block';
}
function hideLoader() {
  loader.style.display = 'none';
}

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const query = event.target.search.value.trim();
  
  if (!query) {
    showMessage('Please enter a search query');
    return;
  }
  
  try {
    showLoader();
    
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
});

function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  
  images.forEach(image => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });
  
  const lightbox = new SimpleLightbox('.gallery a', {});
  lightbox.refresh();
}

function createImageCard(image) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const imageLink = document.createElement('a');
  imageLink.href = image.largeImageURL;
  
  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;
  card.appendChild(img);

 const stats = document.createElement('div');
  stats.classList.add('stats');
  const likes = document.createElement('span');
  likes.textContent = `Likes: ${image.likes}`;
  stats.appendChild(likes);
  const views = document.createElement('span');
  views.textContent = `Views: ${image.views}`;
  stats.appendChild(views);
  const comments = document.createElement('span');
  comments.textContent = `Comments: ${image.comments}`;
  stats.appendChild(comments);
  const downloads = document.createElement('span');
  downloads.textContent = `Downloads: ${image.downloads}`;
  stats.appendChild(downloads);
  card.appendChild(stats);

  return card;
}