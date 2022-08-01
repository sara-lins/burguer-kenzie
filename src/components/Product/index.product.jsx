import Li from "./styles.product.js";

const Product = ({ children, products, cartTotal, setCartTotal }) => {
  function addCardCart(id) {
    cartTotal.length === 0
      ? setCartTotal(products.filter((elem) => elem.id === id))
      : !cartTotal.some((elem) => elem.id === id) &&
        setCartTotal([
          ...cartTotal,
          ...products.filter((elem) => elem.id === id),
        ]);
  }
  return (
    <Li className="Product">
      <figure>
        <img src={children.img} alt="" />
      </figure>
      <h3 className="TitleProduct">{children.name}</h3>
      <p className="CategoryProduct">{children.category}</p>
      <p className="PriceProduct">R$ {children.price}</p>
      <button id={children.id} onClick={() => addCardCart(children.id)}>
        Add
      </button>
    </Li>
  );
};

export default Product;
