import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../Context/ContextAuthProvider";
import { useAppContext } from "../Context/ContextAppProvider";

const BASE_URL = 'http://localhost:3000/orders'

const useGetUserOrders = () => {
const[updateUserOrders, setUpdateUserOrders]=useState(false)
const {user} = useAuthContext()
const{setOrders, setRenderLoadingSpinner} = useAppContext()
  useEffect(() => {
    console.log('Checking if request Get Orders')
      if(updateUserOrders || user){
        setRenderLoadingSpinner(true);
        console.log('API-request: Get Orders')
        console.log(user.email)
  
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
              console.log(res)
            } else if(res.data.result === 'ORDERS'){
              setRenderLoadingSpinner(false);
              setOrders(res.data.data)
              setUpdateUserOrders(null)
              console.log(res)
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
