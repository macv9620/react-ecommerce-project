import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "../Context/ContextAppProvider"
import { useAuthContext } from "../Context/ContextAuthProvider"

const BASE_URL = 'http://localhost:3000/product'

const useDeleteProduct = (id) => {
    const[deleteProductResponse, setDeleteProductResponse] = useState(null)
    const{setRenderLoadingSpinner, setShowModalMessage, setModalMessageToShow} = useAppContext()
    const{token}=useAuthContext()

useEffect(()=>{
  console.log('Checking if delete id')
  if(id){
    setRenderLoadingSpinner(true)
    setTimeout(() => {
      let data = JSON.stringify({id});
      console.log(token)
      console.log(`Bearer ${token}`)
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
      console.log(response)
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
    }, 2000);

  }
  
}, [id])

return{deleteProductResponse}

}

export {useDeleteProduct}








