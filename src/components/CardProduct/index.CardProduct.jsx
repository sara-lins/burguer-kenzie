import Li from "./styles.CardProduct.js";
import { FaTrash } from "react-icons/fa";

const CardProduct = ({ product, cartTotal, setCartTotal }) => {
  function removeCart(id) {
    setCartTotal(cartTotal.filter((prod) => prod.id !== id));
  }
  return (
    <Li>
      <div>
        <img src={product.img} alt="" />
        <div className="ContainerCardCartInfo">
          <h4>{product.name}</h4>
          <p>{product.category}</p>
        </div>
      </div>
      <button
        className="ButtonRemoveCardCart"
        onClick={() => removeCart(product.id)}
      >
        <FaTrash />
      </button>
    </Li>
  );
};

export default CardProduct;
