import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useParams,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import {
  getByCategory,
  getP,
  getByCategoryAndName,
  getProductquery,
  getFeatured,
  getProductByName,
  getProductsByName,
} from "../../redux/actions";

import { Cards, Filter, Loader, Pages, NotFound } from "../../components";
import Teams from "../../components/soccerPictures/seleccion";

import styles from "./styles.module.css";

const Catalogs = () => {
  const location = useLocation();
  const products = useSelector((state) => state.products);
  const featured = useSelector((state) => state.featured);
  const params = useParams();
  const dispatch = useDispatch();

  const query = location.search.split("=").at(1);
  const path = location.pathname.split("/").at(2);
  let category = params.category;
  let name = params.name;

  const [order, setOrder] = useState("");
  // ******************* paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    location.pathname !== "/productos-destacados"
      ? products.slice(firstPostIndex, lastPostIndex)
      : featured.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    // PELOTAS*****
    if (query !== undefined) {
      dispatch(getProductquery(query));
      // console.log("11111");
    }
    if (location.pathname === "/productos/accesorio/pelotas") {
      dispatch(getProductsByName("pelota"));
      // console.log("22222");
    }
    if (location.pathname === "/productos/accesorio/pelota-básquet") {
      dispatch(getProductsByName("Pelota Básquet"));
      // console.log("3333");
    }
    if (location.pathname === "/productos/accesorio/pelota-voley") {
      dispatch(getProductsByName("Pelota Voley"));
      // console.log("4444");
    }
    // *******
    if (location.pathname === "/productos/accesorio/guantes") {
      dispatch(getProductsByName("guantes"));
    }
    if (category === "accesorio" && name === "mediass") {
      dispatch(getProductsByName("medias"));
    }
    if (location.pathname === "/productos-destacados") {
      dispatch(getFeatured());
      // console.log("5555");
    }
    if (
      location.pathname === "/productos" &&
      query === undefined &&
      category === undefined &&
      name === undefined
    ) {
      dispatch(getP());
      // console.log("66666");
    }
    if (location.pathname === "/productos-deportivos") {
      dispatch(getByCategory("deporte"));
      // console.log("7777");
    }
    if (
      path === "River Plate" ||
      path === "Boca Juniors" ||
      path === "Selección ARG" ||
      path === "Inter" ||
      path === "Independiente" ||
      path === "Racing"
    ) {
      dispatch(getByCategoryAndName("deporte", path));
      // console.log("88888");
    }
    if (
      category === "básquet" ||
      category === "fútbol" ||
      category === "vóley" ||
      category === "tenis"
    ) {
      dispatch(getProductquery(category));
      // console.log("9999");
    }
    if (
      (category === "calzado" && name === undefined) ||
      (category === "ropa" && name === undefined) ||
      (category === "accesorio" && name === undefined) ||
      (category === "otros" && name === undefined)
    ) {
      dispatch(getByCategory(category));
      // console.log("111-000");
    }
    // ROPA********
    if (
      (category === "ropa" && name === "camiseta") ||
      (category === "ropa" && name === "shorts") ||
      (category === "ropa" && name === "musculosa") ||
      (category === "ropa" && name === "conjunto") ||
      (category === "ropa" && name === "pantalon")
    ) {
      dispatch(getByCategoryAndName(category, name));
      // console.log("111-111");
    }
    // ACCESORIOS********
    if (
      (category === "accesorio" && name === "gorra") ||
      (category === "accesorio" && name === "protector") ||
      (category === "accesorio" && name === "canilleras") ||
      (category === "accesorio" && name === "bolso") ||
      (category === "accesorio" && name === "targetas") ||
      (category === "accesorio" && name === "silbato") ||
      (category === "accesorio" && name === "conos") ||
      (category === "accesorio" && name === "venda") ||
      (category === "accesorio" && name === "red") ||
      (category === "accesorio" && name === "antiparras") ||
      (category === "accesorio" && name === "pesa") ||
      (category === "accesorio" && name === "soga")
      // pelotas y guantes estan arriba :D
    ) {
      dispatch(getByCategoryAndName(category, name));
      // console.log("111-222");
    }
  }, []);

  const viewproducts =
    location.pathname === "/productos-destacados" ? featured : products;

  useEffect(() => {}, [order, products]);
  return (
    <div className={styles.catalogs}>
      <div className={styles.catalogsOne}>
        <div className={styles.top}>
          <a href="/" className={styles.back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 11h6v7h2v-8a1 1 0 0 0-1-1h-7V6l-5 4 5 4v-3z"></path>
            </svg>
            <span>ATRÁS</span>
          </a>
          <Teams />
        </div>
        <div className={styles.title}>
          <h1>NUEVOS PRODUCTOS Y LANZAMIENTOS</h1>
          <Filter products={products} setOrder={setOrder} />
        </div>
        <div className={styles.row}>
          <Cards products={currentPosts} category={category} name={name} />
          {viewproducts[0] == null ? (
            <NotFound />
          ) : !viewproducts.length ? (
            <Loader />
          ) : null}
          <Pages
            totalPosts={
              location.pathname !== "/productos-deportivos"
                ? products.length
                : featured.length
            }
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Catalogs;
