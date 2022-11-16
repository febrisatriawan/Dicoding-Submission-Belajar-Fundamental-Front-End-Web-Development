class CakeItem extends HTMLElement {
  constructor() {
    super();
  }

  set cake(cake) {
    this._cake = cake;
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="card align-items-center text-center">
            <img
              src="${this._cake.img}"
              class="card-img"
              alt="${this._cake.name}"
            />
            <div class="card-body">
              <h5 class="card-title">${this._cake.name}</h5>
              <p class="card-price">${new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
              }).format(this._cake.harga)}</p>
            </div>
          </div>`;
  }
}

customElements.define('cake-item', CakeItem);
