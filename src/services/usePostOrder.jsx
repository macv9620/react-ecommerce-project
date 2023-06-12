import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "../Context/ContextAppProvider"
import { useAuthContext } from "../Context/ContextAuthProvider"

const BASE_URL = 'http://localhost:3000/order'

const usePostOrder = (dataToPost) => {
    const[postOrderResponse, setPostOrderResponse] = useState(null)
    const{setRenderLoadingSpinner} = useAppContext()
    const{token}=useAuthContext()

useEffect(()=>{
  console.log('Checking if request PostOrder')

  if(dataToPost){
    setRenderLoadingSpinner(true)
    setTimeout(() => {
      let data = JSON.stringify(dataToPost);
      console.log(token)
      console.log(`Bearer ${token}`)
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
    console.log(response)
      setRenderLoadingSpinner(false)
    })
    .catch((error) => {
    setPostOrderResponse(error);
      setRenderLoadingSpinner(false)
      console.log(error);
    });
    }, 2000);

  }
  
}, [dataToPost])

return{postOrderResponse}

}

export {usePostOrder}









