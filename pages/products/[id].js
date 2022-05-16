import React from "react";
import styles from "../../styles/singleBurger.module.css";
import Image from "next/image";
import burger from "../../public/images/b4.jpg";
import burgerIcon from "../../public/images/burgerIcon.png";
import { burgerData } from "../../data/singleBurger";
import axios from "axios";

export default function SingleBurger({ burger }) {
  const [size, setSize] = React.useState(0);
  const [price, setPrice] = React.useState(burger.prices[0]);

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = burger.prices[sizeIndex] - burger.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleCheck = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      // setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      // setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  return (
    <div className={styles.singleBurger}>
      <div className={styles.singleBurger_container}>
        <div className={styles.image}>
          <Image src={burger.img} alt="burger" width={600} height={500} />
        </div>
        <div className={styles.text}>
          <h1>{burger.title}</h1>
          <h2 className={styles.price}>${price}</h2>
          <p>{burger.desc}</p>
          <div className={styles.chooseSize}>
            <h3>choose the size</h3>
            <ul className={styles.icons}>
              <li className={styles.iconItem} onClick={() => handleSize(0)}>
                <Image src={burgerIcon} alt="icon" width={50} height={50} />
                <h4 className={styles.iconText}>small</h4>
              </li>
              <li className={styles.iconItem} onClick={() => handleSize(1)}>
                <Image src={burgerIcon} alt="icon" width={60} height={60} />
                <h4 className={styles.iconText}>medium</h4>
              </li>
              <li className={styles.iconItem} onClick={() => handleSize(2)}>
                <Image src={burgerIcon} alt="icon" width={70} height={70} />
                <h4 className={styles.iconText}>large</h4>
              </li>
            </ul>
          </div>

          <div className={styles.chooseGradient_container}>
            <h3>choose additional gradient</h3>
            <div className={styles.chooseGradient}>
              {burger.extraOptions.map((option) => (
                <div className={styles.gradientItem} key={option._id}>
                  <input
                    type="checkbox"
                    id={option.text}
                    name={option.text}
                    onChange={(e) => handleCheck(e, option)}
                  />
                  <label htmlFor="one">{option.text}</label>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.chooseAmount}>
            <h3>choose amount</h3>
            <input className={styles.amount} type="number" />
            <button className={styles.btn}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      burger: res.data,
    },
  };
};
