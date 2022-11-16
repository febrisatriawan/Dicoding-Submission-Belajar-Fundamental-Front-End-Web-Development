import customStyle from '../../scss/custom.scss';

class SectionHome extends HTMLElement {
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
    <section>
        <div class="home d-flex flex-md-row justify-content-center relative">
          <div
            class="content w-md-50 d-flex justify-content-center align-items-center">
            <div class="wrapper-desc text-center">
              <h4 class="title">                               
                Irvania Cake
              </h4>
              <p class="desc">
              "Apapun momennya, Irvania Cake pilihannya. <br />
              Lezatnya tiada henti ”
              </p>
              <a href="#cake-list" class="btn btn-light">Pesan Sekarang</a>
            </div>
          </div>
          <div class="pic w-md-50 relative">
            <img
              class="image-full inset-0"
              src="https://i.ibb.co/B4KJ8sf/syb-1638948103.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('section-home', SectionHome);
