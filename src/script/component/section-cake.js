import customStyle from '../../scss/custom.scss';

class SectionCake extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    ${customStyle}
    </style>
    <section id="cake-list" class="section-cake">
        <div class="section-title relative">
          <h4 class="back-title">Produk</h4>
          <h4 class="front-title">Produk</h4>
        </div>
        <div class="container pb-5">
          <cake-list class="row row-cols-1 row-cols-md-3"></cake-list>
        </div>
    </section>
    `;
  }
}

customElements.define('section-cake', SectionCake);
