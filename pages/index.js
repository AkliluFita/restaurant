import Head from "next/head";
import Image from "next/image";
import BurgerList from "../components/BurgerList";
import BurgerSlide from "../components/BurgerSlide";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ burgerList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BurgerSlide />
      <BurgerList burgerList={burgerList} />
      <div>hello</div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      burgerList: res.data,
    },
  };
};
