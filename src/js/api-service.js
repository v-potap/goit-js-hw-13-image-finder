class FindPhotoService {
  constructor() {
    this.dBase = "https://pixabay.com/api/";
    this.imageType = "photo";
    this.orientation = "horizontal";
    this.q = undefined;
    this.page = 1;
    this.perPage = 12;
    this.key = "13247549-a9aeab4c72d6d9175a198a7c3";
    this.order = "latest";
  }

  getPage() {
    return this.page;
  }

  async get() {
    let picItems = [];
    try {
      // console.log('GET, Page = ', this.page);
      const response = await fetch(this.getQueryString());
      const json = await response.json();
      picItems = json.hits;
    } catch (err) {
      console.log(err);
    }
    return picItems;
  }
  
  async getNext() {
    this.page++;
    // console.log('GET NEXT, Page = ', this.page);
    return await this.get();
  }

  resetPage() {
    this.page = 1;
  }

  getQueryString() {
    return (
      `${this.dBase}?` +
      `image_type=${this.imageType}&` +
      `orientation=${this.orientation}&` +
      `q=${this.q}&` +
      `per_page=${this.perPage}&` +
      `order=${this.order}&` +
      `key=${this.key}&` +
      `page=${this.page}`
    );
  }

  getQueryStringWOPage() {
    return (
      `${this.dBase}?` +
      `image_type=${this.imageType}&` +
      `orientation=${this.orientation}&` +
      `q=${this.q}&` +
      `per_page=${this.perPage}&` +
      `order=${this.order}&` +
      `key=${this.key}`
    );
  }

  getQueryStringForNextPage() {
    return (
      `${this.dBase}?` +
      `image_type=${this.imageType}&` +
      `orientation=${this.orientation}&` +
      `q=${this.q}&` +
      `per_page=${this.perPage}&` +
      `order=${this.order}&` +
      `key=${this.key}&` +
      `page=${++this.page}`
    );
  }

  setQuery(q) {
    this.q = q;
    this.resetPage();
  }
}

export default new FindPhotoService();
