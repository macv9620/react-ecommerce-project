import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://get-yours.onrender.com/items"

const useGetProductsApi = (setRenderLoadingSpinner, setRenderErrorPage) => {
  const [products, setProducts] = useState(null);
  const [updateProducts, setUpdateProducts] = useState(true)
  useEffect(() => {
    if(updateProducts){
      setRenderLoadingSpinner(true);
      axios.get(BASE_URL)
        .then((products) => {
          setRenderLoadingSpinner(false);
          setProducts(products.data)
          setUpdateProducts(null)
        })
        .catch((err) => {
          setRenderErrorPage(true)
          console.log(err);
          setRenderLoadingSpinner(false);
          setUpdateProducts(null)
        });
    }
  }, [updateProducts]);

  return { products, setUpdateProducts };
};

export { useGetProductsApi };
