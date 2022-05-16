import styles from "../styles/navbar.module.css";
import Image from "next/image";
import phoneIcon from "../public/images/phone.png";
import cart from "../public/images/cart.png";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <span className={styles.leftContainer}>
          <span className={styles.logo}>ABDU LOGO</span>
          <span className={styles.phone}>
            <Image src={phoneIcon} alt="phoneIcon" width={50} height={50} />
            <h5>+905428581821</h5>
          </span>
        </span>
        <ul className={styles.centerContainer}>
          <li className={styles.menuItem}>home page</li>
          <li className={styles.menuItem}>menu</li>
          <li className={styles.menuItem}>product</li>
          <li className={styles.menuItem}>contact</li>
        </ul>
        <span className={styles.right}>
          <Image
            src={cart}
            alt="cart"
            className={styles.cartIcon}
            width={50}
            height={50}
          />
          <span className={styles.badge}></span>
        </span>
      </div>
    </div>
  );
}
