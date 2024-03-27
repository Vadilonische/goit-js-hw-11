import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function imageTemplate(image) {
  return `<li class="image-items">
        <a class="image-link" href="${image.largeImageURL}"></a>
        <img
          src="${image.webformatURL}"
          alt="${image.tags}"
          class="photo-image"
        />
        <div class="image-info">
          <p><span class="accent">Likes</span>${image.likes}</p>

          <p><span class="accent">Views</span>${image.views}</p>

          <p><span class="accent">Comments</span>${image.comments}</p>

          <p><span class="accent">Downloads</span>${image.downloads}</p>
        </div>
      </li>`;
}

export function renderImages(arr) {
  const searchResults = document.querySelector('#search-results');
  searchResults.innerHTML = arr.map(imageTemplate).join('');

  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.on('show.simplelightbox', function () {});
  lightbox.refresh();
}
