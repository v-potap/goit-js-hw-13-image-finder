import * as basicLightbox from "basiclightbox";
import "../css/lightbox.css";

export default function handleGalleryClick(e) {
  const instance = basicLightbox.create(`
            <img src="${
              e.target.closest("li").dataset.largeimageurl
            }" width="800" height="600">
        `);

  instance.show();
}
