export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get SnackCard() {
    return `
    <div class="col-12 col-md-3 mx-3">
            <div class="snackMargin border border-danger border-4 rounded-3">
              <img class="snackImg"
                src="${this.imgUrl}"
                alt="${this.name}">
              <div class="snackTextBg">
                <p class="fs-5 mb-0 ms-2 ">${this.name} $${this.price}</p>
                <button type="button" class="btn btn-danger ms-2 mb-1"  onclick="app.VendingController.buySnack('${this.name}')">Buy<i class="mdi mdi-cart-plus"></i></button>
              </div>
            </div>
          </div>
    `
  }
}