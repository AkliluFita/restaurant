import React from "react";
import styles from "../styles/cart.module.css";
import Image from "next/image";
import burger1 from "../public/images/wb2.jpg";

export default function Cart() {
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
          <tr className={styles.tr}>
            <td>
              <Image src={burger1} alt="burger" width={120} height={120} />
            </td>
            <td>Burger Name 1</td>
            <td>Double ingredient, spice sauce</td>
            <td>$34.7</td>
            <td>4</td>
            <td>$120.35</td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <Image src={burger1} alt="burger" width={120} height={120} />
            </td>
            <td>Burger Name 2</td>
            <td>Double ingredient, spice sauce</td>
            <td>$56.9</td>
            <td>2</td>
            <td>$564.2</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.cartBox}>
        <div className={styles.boxContainer}>
          <h1>cart total</h1>
          <span className={styles.priceList}>
            <h3>subtotal</h3>: $23.3
          </span>
          <span className={styles.priceList}>
            <h3>discount</h3>: $23
          </span>
          <span className={styles.priceList}>
            <h3>total</h3>: $5432.7
          </span>
          <button className={styles.btn}>Checkout now</button>
        </div>
      </div>
    </div>
  );
}
