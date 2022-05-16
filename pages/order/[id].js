import React from "react";
import styles from "../../styles/order.module.css";
import Image from "next/image";
import deliver from "../../public/images/deliver.png";
import payment from "../../public/images/payment.png";
import onWay from "../../public/images/payment.png";
import preparing from "../../public/images/preparing.png";

export default function Order() {
  return (
    <div className={styles.order}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr className={styles.tr}>
              <th className={styles.th}>Order ID</th>
              <th className={styles.th}>Customer</th>
              <th className={styles.th}>Address</th>
              <th className={styles.th}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>23234323479234</td>
              <td>John Doe</td>
              <td>Haspolat, bomonti</td>
              <td>$34.7</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.orderProcess}>
          <div>
            <Image src={payment} alt="payment" width={60} height={60} />{" "}
            <h4>payment</h4>
          </div>
          <div>
            <Image src={preparing} alt="payment" width={60} height={60} />{" "}
            <h4>preparing</h4>
          </div>
          <div>
            <Image src={onWay} alt="payment" width={60} height={60} />{" "}
            <h4>on a way</h4>
          </div>
          <div>
            <Image src={deliver} alt="payment" width={60} height={60} />{" "}
            <h4>deliver</h4>
          </div>
        </div>
      </div>
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
          <button className={styles.btn}>PAID</button>
        </div>
      </div>
    </div>
  );
}
