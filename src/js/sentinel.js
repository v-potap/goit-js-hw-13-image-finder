import loaderTemplate from "../templates/loader.hbs";

import observer from './observer';

export default async function applyGallerySentinel(galleryRef) {
  const loaderMarkup = loaderTemplate();
  galleryRef.insertAdjacentHTML("afterend", loaderMarkup);

  observer.observe(document.querySelector(".loader-ellips"));
}


