import './cake-item.js';

class CakeList extends HTMLElement {
  constructor() {
    super();
  }

  set cake(cake) {
    this._cake = cake;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._cake.forEach((cake) => {
      const cakeItem = document.createElement('cake-item');
      const cakeAnimate = document.createAttribute('data-aos');
      cakeAnimate.value = 'zoom-in';
      cakeItem.className = 'col mb-4';
      cakeItem.cake = cake;
      cakeItem.setAttributeNode(cakeAnimate);
      this.appendChild(cakeItem);
    });
  }

  renderError(message) {
    this.innerHTML = `
        <style>
            .message-error {
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                color: #929aab;
            }
        </style>`;
    this.innerHTML += `<h2 class="message-error">${message}</h2>`;
  }
}

customElements.define('cake-list', CakeList);
