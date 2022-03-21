export class Request {

  error   = false;
  loading = false;

  response;

  constructor(url) {
    this.url = url;
  }


  async useGet() {
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
}