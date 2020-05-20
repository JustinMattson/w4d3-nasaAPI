export default class Value {
  constructor(data) {
    //console.log("hello from Model");
    this.copyright = data.copyright;
    this.date = data.date;
    this.explanation = data.explanation;
    this.title = data.title;
    this.imgUrl = data.url;
  }

  get Template() {
    return /*html*/ `
                  <!-- VALUES TEMPLATE -->
                  <div class="card m-3">
                  <img class="card-img-top" src="${this.imgUrl}" alt="" />
                  <div class="card-body">
                    <h4 class="card-title">${this.title}</h4>
                    <p class="card-text">${this.explanation}</p>
                  </div>
                </div>
                <!-- END VALUES TEMPLATE -->
        `;
  }
}
