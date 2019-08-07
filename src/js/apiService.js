export default class FindPhotoService {
  constructor() {
    this.dBase = "https://pixabay.com/api/";
    this.imageType = "photo";
    this.orientation = "horizontal";
    this.q = undefined;
    this.page = 1;
    this.perPage = 12;
    this.key = "";
  }

  canFetch() {
    return this.q;
  }

  async get() {
    return picItems;
  }

  next() {
    this.page += 1;
    return this.get();
  }

  getPage() {
    return this.page;
  }

  resetPage() {
    this.page = 1;
  }

  getQuery() {
    return;
    `${this.dBase}?` +
      `image_type=${this.imageType}&` +
      `orientation=${this.orientation}&` +
      `q=${this.q}&` +
      `page=${this.page}&` +
      `key=${this.key}`;
  }

  setQuery(q) {
    this.q = q;
    this.resetPage();
  }
}
