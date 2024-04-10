export function createImageCard(image) {
  return `
    <div class="card">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}">
      </a>
      <div class="stats">
        <span>Likes: ${image.likes}</span>
        <span>Views: ${image.views}</span>
        <span>Comments: ${image.comments}</span>
        <span>Downloads: ${image.downloads}</span>
      </div>
    </div>
  `;
}

export function showMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message
  });
}

export function hideMessage() {
}