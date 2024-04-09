export function createImageCard(image) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const imageLink = document.createElement('a');
  imageLink.href = image.largeImageURL;

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;

  imageLink.appendChild(img);
  card.appendChild(imageLink);
  
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

export function showMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message
  });
}

export function hideMessage() {
}