import FindPhotoService from "./apiService";

const domRefs = {
  form: document.querySelector("#search-form")
};

const findPhotoService = new FindPhotoService();

domRefs.form.addEventListener("submit", handleUserInput);

function handleUserInput(e) {
  e.preventDefault();
  const userQuery = domRefs.form.querySelector("input").value;

  if (userQuery === "") {
    return;
  }

  findPhotoService.setQuery(userQuery);

}
