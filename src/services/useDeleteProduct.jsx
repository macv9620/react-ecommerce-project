import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "../Context/ContextAppProvider"
import { useAuthContext } from "../Context/ContextAuthProvider"

const BASE_URL = 'https://get-yours.onrender.com/product'

const useDeleteProduct = (id) => {
    const[deleteProductResponse, setDeleteProductResponse] = useState(null)
    const{setRenderLoadingSpinner, setShowModalMessage, setModalMessageToShow} = useAppContext()
    const{token}=useAuthContext()

useEffect(()=>{
  if(id){
    setRenderLoadingSpinner(true)

      let data = JSON.stringify({id});
    let config = {
      method: 'delete',
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
      setDeleteProductResponse(response)
      setRenderLoadingSpinner(false)

      setShowModalMessage(true) 
      setModalMessageToShow({
        message: `item ${response.data[0].product_name} deleted successfully`,
        type: 'success'
      })

    })
    .catch((error) => {
      setDeleteProductResponse(error);
      setRenderLoadingSpinner(false)

      setShowModalMessage(true) 
      setModalMessageToShow({
        message: error.message,
        type: 'error'
      })

      console.log(error);
    });

  }
  
}, [id])

return{deleteProductResponse}

}

export {useDeleteProduct}









