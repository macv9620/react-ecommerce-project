import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../Context/ContextAuthProvider";
import { useAppContext } from "../Context/ContextAppProvider";

const BASE_URL = 'https://get-yours.onrender.com/orders'

const useGetUserOrders = () => {
const[updateUserOrders, setUpdateUserOrders]=useState(false)
const {user} = useAuthContext()
const{setOrders, setRenderLoadingSpinner} = useAppContext()
  useEffect(() => {
      if(updateUserOrders || user){
        setRenderLoadingSpinner(true);
 
        let data = JSON.stringify({
          "email": user.email
        })
  
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: BASE_URL,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
  
        axios.request(config)
          .then((res) => {
            if(res.data.result === 'NO-ORDERS'){
              setRenderLoadingSpinner(false);
              setOrders([])
              setUpdateUserOrders(null)
            } else if(res.data.result === 'ORDERS'){
              setRenderLoadingSpinner(false);
              setOrders(res.data.data)
              setUpdateUserOrders(null)
            }
          })
          .catch((err) => {
            console.log(err);
            setRenderLoadingSpinner(false);
            setUpdateUserOrders(null)
          });
      }

  }, [updateUserOrders, user]);

  return { setUpdateUserOrders };
};

export { useGetUserOrders };
