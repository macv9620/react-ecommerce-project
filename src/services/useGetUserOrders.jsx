import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../Context/ContextAuthProvider";
import { useAppContext } from "../Context/ContextAppProvider";

const BASE_URL = "http://localhost:3000/orders"

const useGetUserOrders = () => {
const[updateUserOrders, setUpdateUserOrders]=useState(true)
const {user} = useAuthContext()
const{setOrders, setRenderLoadingSpinner} = useAppContext()
  useEffect(() => {
    console.log(updateUserOrders)
    if(updateUserOrders){
      setRenderLoadingSpinner(true);
      console.log('API-request: Get Orders')
      axios.get(BASE_URL,{
        email: user.email
      })
        .then((products) => {
          setRenderLoadingSpinner(false);
          setOrders(products.data)
          setUpdateUserOrders(null)
        })
        .catch((err) => {
          console.log(err);
          setRenderLoadingSpinner(false);
          setUpdateUserOrders(null)
        });
    }
  }, [updateUserOrders]);

  return { setUpdateUserOrders };
};

export { useGetUserOrders };
