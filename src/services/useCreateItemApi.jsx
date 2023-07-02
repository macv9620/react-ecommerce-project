import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "../Context/ContextAppProvider"
import { useAuthContext } from "../Context/ContextAuthProvider"

const BASE_URL = 'https://get-yours.onrender.com/items'

const useCreateItemApi = (dataToPost /*clearForm*/) => {
    const[createItemResponse, setCreateItemResponse] = useState(null)
    const{setRenderLoadingSpinner, setShowModalMessage, setModalMessageToShow} = useAppContext()
    const{token}=useAuthContext()

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
      setCreateItemResponse(response);
      setRenderLoadingSpinner(false)

      setShowModalMessage(true) 
      setModalMessageToShow({
        message: 'Product created successfully',
        type: 'success'
      })

    })
    .catch((error) => {
      setCreateItemResponse(error);
      setRenderLoadingSpinner(false)
      console.log(error);

      setShowModalMessage(true) 
      setModalMessageToShow({
        message: 'Network problems, please try again in a moment',
        type: 'error'
      })

    });


  }
  
}, [dataToPost])

return{createItemResponse}

}

export {useCreateItemApi}









