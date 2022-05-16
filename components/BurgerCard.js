import React from "react";
import Image from "next/image";
// import burger from "../public/images/b4.jpg";
import styles from "../styles/burgerCard.module.css";
import Link from "next/link";

export default function burgerCard({ burger }) {
  return (
    <div className={styles.burgerCard}>
      <div className={styles.burgerImage}>
        {" "}
        <Link href={`/products/${burger._id}`} passHref>
          <Image src={burger.img} alt="burger" width={250} height={200} />
        </Link>
      </div>
      <h3>{burger.title}</h3>
      <h3>${burger.prices[0]}</h3>
      <p>{burger.desc}</p>
    </div>
  );
}
