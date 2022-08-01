import { Div, P } from "./styles.Cart";

const Cart = ({ children }) => {
  return (
    <Div>
      <P>Shopping cart</P>
      <div className="ContainerCardsProducts">{children}</div>
    </Div>
  );
};

export default Cart;
