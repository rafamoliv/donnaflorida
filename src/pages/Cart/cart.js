import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { Colors } from "../../themes/index";
import * as Styles from "./styles";
/* import { Container } from "./styles"; */
import Header from "../../components/Header";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete, MdRemoveShoppingCart } from "react-icons/md";
import { Container, ProductTable, Total, EmptyCart, StartShopping } from "./styles.js";

const Cart = ({ cart, total, addProduct, setShipping }) => (
  <>
    <Header />
    {/* <Container>
      {cart.length === 0 ? (
        <EmptyCart>
          <MdRemoveShoppingCart />

          <div>
            <h2>Oops...</h2>
            <p>Parece que seu carrinho está vazio!</p>
            <StartShopping to="/">Start Shopping</StartShopping>
          </div>
        </EmptyCart>
      ) : (
      <>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUCT</th>
              <th>AMOUNT</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <figure>
                    <img src={product.image} alt={product.name} />
                  </figure>
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>
                    <input type="text" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product.id))}>
                    <MdDelete size={20} color="#7159c1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <button type="submit">Proceed to Checkout</button>
          <Total>
            <span>TOTAL:</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </>
      )}
    </Container> */}
    <div>
      <h1>Carrinho</h1>
      <p>
        Items: <strong>{cart.items.length}</strong>
      </p>
      <p>
        Frete: <strong>{cart.shipping_value}</strong>
      </p>
      <p>
        Total: <strong>{total}</strong>
      </p>
      <button onClick={addProduct}>Adicionar produto</button>
      <button onClick={setShipping}>Calcular frete</button>
    </div>
  </>
);

const calculateTotal = createSelector(
  (state) => state.items,
  (state) => state.shipping_value,
  (items, shipping_value) => {
    console.log("CALCULOU");
    return items.reduce((subtotal, item) => subtotal + item.price, 0) + shipping_value;
  }
);

const mapStateToProps = (state) => ({
  cart: state,
  total: calculateTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: () => dispatch({ type: "ADD" }),
  setShipping: () => dispatch({ type: "SET_SHIPPING" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
