import { useEffect, useState } from "react";
import Product from "./components/Product/index.product.jsx";
import Cart from "./components/Cart/index.Cart";
import Logo from "./components/imgs/logo.svg";
import { api } from "./service/api";
import CardProduct from "./components/CardProduct/index.CardProduct.jsx";
import { GoSearch } from "react-icons/go";
import "./App.css";

function App() {
  const [products, setProducts] = useState([""]);
  const [cartTotal, setCartTotal] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    api.get("products").then((res) => setProducts(res.data));
  }, [valueInput, filteredProducts]);

  function increasePrice() {
    let value =
      cartTotal &&
      cartTotal
        .map((product) => product.price)
        .reduce((acumulator, currentValue) => acumulator + currentValue)
        .toString();

    if (value.length <= 5) {
      return value;
    } else {
      let newValue = "";
      for (let count = 0; count <= 4; count++) {
        newValue = newValue + value[count];
      }
      return newValue;
    }
  }

  function filterButtonSearch(e) {
    e.preventDefault();
    setFilteredProducts(
      products.filter(
        (prod) => prod.name === valueInput || prod.category === valueInput
      )
    );
  }

  function filterInputSearch(e, target) {
    let newTarget;
    for (let i = 0; i < target.length; i++) {
      i === 0
        ? (newTarget = target[i].toUpperCase())
        : (newTarget += target[i]);
    }

    setValueInput(newTarget);
    setFilteredProducts(
      products.filter(
        (prod) => prod.name === valueInput || prod.category === valueInput
      )
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="Logo" />
        <form onSubmit={filterButtonSearch}>
          <input
            type="text"
            placeholder="Search Product"
            value={valueInput}
            onChange={(e) => filterInputSearch(e, e.target.value)}
          />
          <button type="submit">
            <GoSearch />
          </button>
        </form>
      </header>
      <main>
        <div className="ContainerProduct">
          <ul>
            {!filteredProducts.length
              ? products.map((prod, index) => (
                  <Product
                    key={index}
                    products={products}
                    cartTotal={cartTotal}
                    setCartTotal={setCartTotal}
                  >
                    {prod}
                  </Product>
                ))
              : filteredProducts.map((prod, index) => (
                  <Product
                    key={index}
                    products={products}
                    cartTotal={cartTotal}
                    setCartTotal={setCartTotal}
                  >
                    {prod}
                  </Product>
                ))}
          </ul>
        </div>
        <div className="ContainerCart">
          <Cart>
            {cartTotal.length === 0 ? (
              <div className="ContainerCart__Cards--empty">
                <p className="Cards--empty">Your bag is empty</p>
                <p className="Cards--emptySubText">Add items</p>
              </div>
            ) : (
              <div className="ContainerCart__Cards--full">
                <ul>
                  {cartTotal.map((product, index) => (
                    <CardProduct
                      key={index}
                      product={product}
                      cartTotal={cartTotal}
                      setCartTotal={setCartTotal}
                    />
                  ))}
                </ul>
                <div className="ContainerTotalCart">
                  <p className="TitleTotalCart">Total</p>
                  <p className="PriceTotalCart">R$ {increasePrice()}</p>
                </div>
                <button
                  className="ButtonRemoveAll"
                  onClick={() => setCartTotal([])}
                >
                  Remove All
                </button>
              </div>
            )}
          </Cart>
        </div>
      </main>
    </div>
  );
}

export default App;
