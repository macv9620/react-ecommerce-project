import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "../Context/ContextAppProvider"
import { useAuthContext } from "../Context/ContextAuthProvider"
import { useGetUserOrders } from "./useGetUserOrders"

const BASE_URL = 'https://get-yours.onrender.com/order'

const usePostOrder = (dataToPost) => {
    const[postOrderResponse, setPostOrderResponse] = useState(null)
    const{setRenderLoadingSpinner, setShowModalMessage, setModalMessageToShow} = useAppContext()
    const{token}=useAuthContext()
    const{setUpdateUserOrders}=useGetUserOrders()

useEffect(()=>{

  if(dataToPost){
    setRenderLoadingSpinner(true)
      let data = JSON.stringify(dataToPost);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: BASE_URL,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      setPostOrderResponse(response)
      setRenderLoadingSpinner(false)
      setUpdateUserOrders(true)

      setShowModalMessage(true) 
      setModalMessageToShow({
        message: 'Order created successfully',
        type: 'success'
      })

    })
    .catch((error) => {
      setPostOrderResponse(error);
      setRenderLoadingSpinner(false)

      setShowModalMessage(true) 
      setModalMessageToShow({
        message: 'Network problems, please try again in a moment',
        type: 'error'
      })

      console.log(error);
    });

  }
  
}, [dataToPost])

return{postOrderResponse}

}

export {usePostOrder}









