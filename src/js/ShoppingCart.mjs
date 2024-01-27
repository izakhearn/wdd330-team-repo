import { renderListWithTemplate } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";

function CardTemplate(item) {
    return `<li class="cart-card divider">
    <div class="card__icons">✖ 🞦 ⛔</div>
    <a href="#" class="cart-card__image">
      <img
        src="${item.Image}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: ${item.quantity}</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
    <p class="cart-card__total">Something</p>
  </li>`;
}

export default class ShoppingCart {
    constructor() {
        this.cartItems = getLocalStorage("so-cart");
        this.cartTotal = getLocalStorage("so-cart-total");
        this.element = document.querySelector(".product-list");
        this.render();
    }

    async init() {
        this.render();
    }

    render() {
        renderListWithTemplate(CardTemplate, this.element, this.cartItems, "afterBegin", true);
        document.querySelector(".cart-total").innerHTML = "Total $" + this.cartTotal;
    }
}