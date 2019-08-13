import applyNewGallery from "./gallery";
import applyPhotoSet from "./gallery-items";
import applyGallerySentinel from "./sentinel";

import PNotify from "pnotify/dist/es/PNotify.js";
// import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
// import PNotifyButtons from "pnotify/dist/es/PNotifyButtons.js";
import "pnotify/dist/PNotifyBrightTheme.css";

const domRefs = {
  form: document.querySelector("#search-form"),
  b: document.querySelector("#search-form").querySelector(".search-info")
};

domRefs.form.addEventListener("submit", handleUserInput);

async function handleUserInput(e) {
  e.preventDefault();
  const userQuery = domRefs.form.querySelector("input").value;

  if (userQuery.length < 3) {
    // NOTIFY

    // PNotify.defaults.styling = "material";
    // PNotify.defaults.icons = "material";

    PNotify.error({
      title: "Wrong input",
      text: "Input should contain at least 3 characters.",
      icon: true,
      animation: "fade",
      delay: 3000
    });

    return;
  }

  domRefs.b.textContent = `Search results for "${userQuery}". At least 3 letters + [Enter] to start new search:`;
  PNotify.notice({
    title: "Searching ...",
    text: `results for "${userQuery.toLocaleUpperCase()}"`,
    icon: true,
    animation: "fade",
    delay: 1000
  });

  domRefs.form.reset();

  domRefs.gallery = await applyNewGallery(domRefs.form);

  const succeed = await applyPhotoSet(userQuery);

  if (succeed) {
    await applyGallerySentinel(domRefs.gallery);
  }
}
