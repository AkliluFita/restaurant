import React from "react";
import styles from "../styles/BurgerSlide.module.css";
import Image from "next/image";
import burger1 from "../public/images/gBurger.jpg";
import burger2 from "../public/images/bb1.jpeg";
import burger3 from "../public/images/bb2.png";
import burger4 from "../public/images/gPizza.jpeg";
import leftArrow from "../public/images/left.png";
import rightArrow from "../public/images/right.png";

export default function BurgerSlide() {
  const [index, setIndex] = React.useState(0);
  const burgerList = [burger1, burger2, burger3, burger4];

  const handleLeft = () => {
    if (index >= 1 && index <= 3) setIndex(index - 1);
    console.log(index);
  };

  const handleRight = () => {
    if (index >= 0 && index <= 2) setIndex(index + 1);
    console.log(index);
  };

  console.log(index);

  return (
    <div className={styles.burgerSlide}>
      <div className={styles.container}>
        <div className={styles.leftArrow} onClick={handleLeft}>
          <Image src={leftArrow} alt="left" />
        </div>

        <div className={styles.middleContainer}>
          <div className={styles.slideText}>
            <h5>Fresh, deleciious Burgure</h5>
            <h3>50% descount</h3>
            <h3>ORDER NOW</h3>
          </div>
          <div className={styles.images}>
            <Image
              src={burgerList[index]}
              alt="burger"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className={styles.rightArrow} onClick={handleRight}>
          <Image src={rightArrow} alt="right" />
        </div>
      </div>
    </div>
  );
}
