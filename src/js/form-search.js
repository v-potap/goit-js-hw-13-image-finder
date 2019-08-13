import formSearchTemplate from "../templates/form-search.hbs";

const formSearch = document.querySelector("body");
formSearch.insertAdjacentHTML("afterbegin", formSearchTemplate());
