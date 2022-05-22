import styles from "../styles/navbar.module.css";
import Image from "next/image";
import phoneIcon from "../public/images/phone.png";
import cart from "../public/images/cart.png";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  const products = useSelector((state) => state.cart.products);
  console.log(products); // 0
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
          <Link href={"/"} passHref>
            <li className={styles.menuItem}>home page</li>
          </Link>
          <li className={styles.menuItem}>menu</li>
          <li className={styles.menuItem}>product</li>
          <li className={styles.menuItem}>contact</li>
        </ul>
        <Link href={"/cart"} passHref>
          <span className={styles.right}>
            <Image
              src={cart}
              alt="cart"
              className={styles.cartIcon}
              width={50}
              height={50}
            />
            <span className={styles.badge}>{quantity}</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
