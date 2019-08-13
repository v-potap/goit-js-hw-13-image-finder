import photoItemTemplate from "../templates/gallery-item.hbs";
import findPhotoService from "./api-service";

export default async function applyPhotoSet(queryString) {
  findPhotoService.setQuery(queryString);

  const photos = await findPhotoService.get();
  const galleryRef = document.querySelector(".gallery");
  const galleryItemMarkup = photoItemTemplate(photos);
  galleryRef.insertAdjacentHTML("beforeend", galleryItemMarkup);

  return photos.length === findPhotoService.perPage;
}

// import Masonry from "masonry-layout";

// import InfiniteScroll from "infinite-scroll";

// INFINITE SCROLL (WTF NOT WORKING)

// const msnry= new Masonry(galleryRef, {
//     // options...
//     itemSelector: ".gallery__item",
//     columnWidth: 200
//   });

// if (findPhotoService.getCounter > 0) {
//   const infiniteScroll = new InfiniteScroll(galleryRef, {
//     path: function() {
//       console.log(`Infinite scroll: page - ${findPhotoService.getPage()}`);
//       console.log(findPhotoService.getQueryString());
//       return findPhotoService.getQueryStringForNextPage();
//     },
//     responseType: "text",
//     // outlayer: msnry,
//     history: false
//   });
// }
