const products = [
  {
    id: 1,
    img: "/src/assets/product01.png",
    description:
      "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 582.9,
    discount: 15,
  },
  {
    id: 2,
    img: "/src/assets/product02.png",
    description:
      "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 582.9,
    discount: 23,
  },
  {
    id: 3,
    img: "/src/assets/product03.png",
    description:
      "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 582.9,
    discount: null,
  },
  {
    id: 4,
    img: "/src/assets/product04.png",
    description:
      "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 582.9,
    discount: null,
  },
];

const cardList = document.getElementById("product-card-list");

products.map((product) => {
  cardList.insertAdjacentHTML(
    "beforeend",
    ` <div class="card-product">
        
      <div class="${
        product.discount === null ? "display-none" : "display-flex"
      } discount">
        <p class="percent">${product.discount}%</p>
        <p>Off</p>
      </div>
      <div class="product-image">
        <img
          src="${product.img}"
          alt="Produto 0${product.id}"
          class="img-product"
        />
      </div>
      <p class="text-description">
        ${product.description}
      </p>
      <div>
        <p class="value-original">de R$ ${product.price}0</p>
        <p class="value-atual">
          <strong>R$ 238,41</strong>
        </p>
        <p class="parcelamento">
          <strong>5x</strong> de <strong>R$ 47,68</strong> sem juros
        </p>
      </div>

      <button id="btn-product0${product.id}" class="add-cart">
        Adicionar ao carrinho
      </button>
    </div>`
  );
});
