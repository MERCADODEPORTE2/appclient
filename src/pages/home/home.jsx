import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFeatured, getImages, getP } from "../../redux/actions";
import { Carrusel, Carousel, Sale, Loader, Equipment, Warning } from "../../components/index"

import styles from "./styles.module.css";

const Home = () => {
  const [open, setOpen] = useState(true)
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const featured = useSelector((state) => state.featured);
  const images = useSelector((state) => state.images);

  useEffect(() => {
    if (!featured.length) {
      dispatch(getFeatured());
    }
    if (!products.length) {
      dispatch(getP());
    }
    if (!images.length) {
      dispatch(getImages());
    }
    window.localStorage.setItem("active", true)
  }, [dispatch, featured, products, images]);

  return (
    <div className={styles.home}>
      {!products.length && !featured.length && <Loader />}
      <div className={styles.homeTop}>
        <div className={styles.contentCarr}>
          <Carousel images={images} />
        </div>
        <Equipment/>
        {
          open === true ? 
          <Warning setOpen={setOpen}/>
        : null
        }
        <div className={styles.carrCards}>
          <Carrusel featured={featured}></Carrusel>
        </div>
      </div>
      <Sale></Sale>
    </div>
  );
};

export default Home;
