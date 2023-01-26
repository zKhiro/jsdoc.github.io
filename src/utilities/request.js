export class Request {

  error   = false;
  loading = false;

  response;

  constructor(url) {
    this.url = url;
  }


  async getJson() {
    this.error    = false;
    this.loading  = true;

    try {
      this.response = await (await fetch(this.url, { method: 'GET' })).json();
    } catch(catchError) {
      this.loading  = false;
      this.error    = true;

      throw catchError;
    }
  }

  async getText() {
    this.error    = false;
    this.loading  = true;

    try {
      this.response = await (await fetch(this.url, { method: 'GET' })).text();
    } catch(catchError) {
      this.loading  = false;
      this.error    = true;

      throw catchError;
    }
  }
}