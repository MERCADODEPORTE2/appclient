import React from "react";

const ProductSchema = ({ name, description, brand, score, price, image }) => {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: score,
      reviewCount: score,
    },
    offers: {
      "@type": "Offer",
      price: "000",
      priceCurrency: "111",
    },
    image: image,
  };

  return (
    <script type="application/ld+json">{JSON.stringify(productData)}</script>
  );
};

export default ProductSchema;
