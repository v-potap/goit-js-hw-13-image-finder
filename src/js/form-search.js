import formSearchTemplate from "../templates/form-search.hbs";

const markup = buildSearchFormMarkup();
const formSearch = document.querySelector("body");
formSearch.insertAdjacentHTML("afterbegin", markup);

function buildSearchFormMarkup() {
  return formSearchTemplate();
}

//npm install --save -!../../node_modules/css-loader/dist/cjs.js!material-design-icons-iconfont/src/material-design-icons