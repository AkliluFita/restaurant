import React from "react";
import styles from "../styles/cart.module.css";
import Image from "next/image";
import burger1 from "../public/images/wb2.jpg";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

export default function Cart() {
  // This values are the props in the UI
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };

  const products = useSelector((state) => state.cart.products);
  const cartTotal = useSelector((state) => state.cart.total);

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, dispatch, options, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.cart}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tr}>
            <th className={styles.th}>Product</th>
            <th className={styles.th}>Names</th>
            <th className={styles.th}>Extras</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className={styles.tr} key={product._id}>
              <td>
                <Image
                  src={product.img}
                  alt="burger"
                  width={120}
                  height={120}
                />
              </td>
              <td>{product.title}</td>
              <td>
                {product.extraOptions.map((option) => (
                  <span key={option._id}>{option.text}, </span>
                ))}
              </td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>${product.price * product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.cartBox}>
        <div className={styles.boxContainer}>
          <h1>cart total</h1>
          <span className={styles.priceList}>
            <h3>subtotal</h3>: ${cartTotal}
          </span>
          <span className={styles.priceList}>
            <h3>discount</h3>: $0
          </span>
          <span className={styles.priceList}>
            <h3>total</h3>: ${cartTotal}
          </span>
          <button className={styles.btn}>Checkout now</button>
        </div>
        <div
          className={styles.paypalBtn}
          style={{ maxWidth: "750px", minHeight: "200px" }}
        >
          <PayPalScriptProvider
            options={{
              "client-id": "test",
              components: "buttons",
              currency: "USD",
            }}
          >
            <ButtonWrapper currency={currency} showSpinner={false} />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
}
