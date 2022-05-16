import React from "react";
import styles from "../styles/burgerList.module.css";
import BurgerCard from "./BurgerCard";
// import { burgerCardList } from "../data/burgerCardList";

export default function BurgerList({ burgerList }) {
  return (
    <div className={styles.burgerList}>
      <div className={styles.text}>
        <h2 className={styles.detailText}>the best Burger in the town</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          quia recusandae soluta repellat voluptate iste voluptas, aliquid autem
          neque suscipit. Fugiat porro, ea earum alias pariatur fuga voluptatum
          quae. Ullam.
        </p>
      </div>
      <div className={styles.list_container}>
        {burgerList.map((burger) => (
          <BurgerCard key={burger._id} burger={burger} />
        ))}
      </div>
    </div>
  );
}
