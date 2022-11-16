import customStyle from '../../scss/custom.scss';

class HeaderNav extends HTMLElement {
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
    <header id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
    <div class="container">
      <a class="navbar-brand" href="#">Irvania Cake</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#nav">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#cake-list">Produk</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="#">Tentang Kami</a>
          </li>  
          <li class="nav-item">
            <a class="nav-link" href="#">Kontak</a>
          </li>         
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Cari" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Cari</button>
        </form>
        </div>
      </div>
    </nav>
    </header>
    `;
  }
}

customElements.define('header-nav', HeaderNav);
