const minus = Array.from(
  document.getElementsByClassName(
    "product__quantity-control product__quantity-control_dec",
  ),
);
const plus = Array.from(
  document.getElementsByClassName(
    "product__quantity-control product__quantity-control_inc",
  ),
);

// обработчики на + и -

plus.forEach((plusButton) => {
  plusButton.addEventListener("click", function (event) {
    let productQuantity = this.previousElementSibling;
    productQuantity.innerText = Number(productQuantity.innerText) + 1;
  });
});

minus.forEach((minusButton) => {
  minusButton.addEventListener("click", function (event) {
    let productQuantity = this.nextElementSibling;

    if (Number(productQuantity.innerText) < 2) {
      return;
    }

    productQuantity.innerText = Number(productQuantity.innerText) - 1;
  });
});

// добавляем товары в корзину

const cartProducts = document.querySelector(".cart__products");
const addProduct = Array.from(document.getElementsByClassName("product__add"));

addProduct.forEach((button) => {
  button.addEventListener("click", function (event) {
    const product = this.closest(".product");
    const id = product.dataset.id;
    const src = product.querySelector(".product__image").src;
    const productQuantity = product.querySelector(
      ".product__quantity-value",
    ).innerText;

    const idList = Array.from(
      cartProducts.getElementsByClassName("cart__product"),
    );
    const exists = idList.findIndex((element) => element.dataset.id === id);

    if (exists > -1) {
      const oldValue = Number(
        idList[exists].querySelector(".cart__product-count").innerText,
      );
      idList[exists].querySelector(".cart__product-count").innerText =
        oldValue + Number(productQuantity);
    } else {
      let mainDiv = document.createElement("div");
      mainDiv.classList.add("cart__product");
      mainDiv.setAttribute("data-id", id);

      let img = document.createElement("img");
      img.classList.add("cart__product-image");
      img.setAttribute("src", src);

      let childDiv = document.createElement("div");
      childDiv.classList.add("cart__product-count");
      childDiv.innerText = productQuantity;

      mainDiv.append(img, childDiv);

      cartProducts.append(mainDiv);
    }
  });
});
