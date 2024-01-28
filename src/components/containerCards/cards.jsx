import React from "react";
import Card from "../card/card";
import ProductSchema from "../schemaComponent/productSchema";

import styles from "./styles.module.css";

const Cards = ({ products }) => {
  return (
    <div className={styles.cards}>
      {products?.map((elem, i) => (
        <>
          <Card
            name={elem?.name}
            score={elem?.score}
            tags={elem?.tags}
            category={elem?.category}
            img={elem?.image}
            max={elem?.price}
            key={i}
            id={elem?.id}
          />
          <ProductSchema
            name={elem?.name}
            description={elem?.description}
            brand={elem?.brand}
            score={elem?.score}
            price={elem?.price}
            image={elem?.image[0]}
            key={i}
          />
        </>
      ))}
    </div>
  );
};

export default Cards;
