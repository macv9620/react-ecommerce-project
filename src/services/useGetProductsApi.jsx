import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/items"

const useGetProductsApi = (setRenderLoadingSpinner, setRenderErrorPage) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
      setRenderLoadingSpinner(true);
      console.log('API-request: Get Products')
      axios.get(BASE_URL)
        .then((products) => {
          setRenderLoadingSpinner(false);
          setProducts(products.data)
        })
        .catch((err) => {
          setRenderErrorPage(true)
          console.log(err);
          setRenderLoadingSpinner(false);
        });
  }, []);

  return { products };
};

export { useGetProductsApi };
