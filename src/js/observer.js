import findPhotoService from './api-service';
import photoItemTemplate from "../templates/gallery-item.hbs";

export default new IntersectionObserver(loadMore, {
  // root: galleryRef,
  // rootMargin: "0px 0px 100px 0px",
  threshold: 0.2
});

async function loadMore(entries, observer) {
  const galleryRef = document.querySelector(".gallery");
  const justOnce = galleryRef.getAttribute("justOnce");
  galleryRef.setAttribute("justOnce", justOnce === "false" ? true : false);
  if (justOnce === "false" ? true : false) {
    const photos = await findPhotoService.getNext();
    if (photos.length > 0) {
      const galleryItemMarkup = photoItemTemplate(photos);
      galleryRef.insertAdjacentHTML("beforeend", galleryItemMarkup);
    } else {
      document.querySelector("#observe-marker").remove();
    }
    if (photos.length !== findPhotoService.perPage) {
      document.querySelector("#observe-marker").remove();
    }
  }
}
