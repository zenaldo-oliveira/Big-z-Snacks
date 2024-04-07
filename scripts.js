const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");

function formatCurrency(value ) {
  const newValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return newValue
}

function showAll(productsArray) {
  let myLI = "";

  productsArray.forEach((product) => {
    myLI += `
              <li>
                  <img src=${product.src}>
                  <p>${product.name}</p>
                  <p class="item-price">R$ ${formatCurrency(product.price)}</p>
              </li>
         
            `;
  });

  list.innerHTML = myLI;
}

function mapallItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9, // dar 10% de descontos
  }));

  showAll(newPrices);
  // Spread operator
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
  list.innerHTML = `
    <li>
        <p>O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
    </li>
    `;
}
function filterVeganItems() {
  const veganProducts = menuOptions.filter((product) => product.vegan);
  showAll(veganProducts);
}
console.log(filterVeganItems);

filterAll.addEventListener("click", filterVeganItems);

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapallItems);
sumAll.addEventListener("click", sumAllItems);
