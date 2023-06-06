import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/items"

const useGetProductsApi = (setRenderLoadingSpinner) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setRenderLoadingSpinner(true);
    axios.get(BASE_URL)
      .then((products) => {
        setRenderLoadingSpinner(false);
        setProducts(products.data)
      })
      .catch((err) => {
        console.log(err);
        setRenderLoadingSpinner(false);
      });
  }, []);

  return { products };
};

export { useGetProductsApi };
