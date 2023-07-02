import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "../Context/ContextAppProvider"

const BASE_URL = 'https://get-yours.onrender.com/register'

const useSignUpApi = (dataToPost, clearForm) => {
    const[signUpResponse, setSignUpResponse] = useState(null)
    const{setRenderLoadingSpinner, setShowModalMessage, setModalMessageToShow} = useAppContext()


useEffect(()=>{
    if(dataToPost){
        setRenderLoadingSpinner(true)
            axios.post(BASE_URL, dataToPost)
            .then(res => {
                setSignUpResponse(res)
                setRenderLoadingSpinner(false)
                clearForm()

                setShowModalMessage(true) 
                setModalMessageToShow({
                  message: 'User created successfully, please Log In',
                  type: 'success'
                })

            })
            .catch(err => {
                setSignUpResponse(err)
                console.log(err)
                setRenderLoadingSpinner(false)
            })
    }
}, [dataToPost])

return{signUpResponse}

}

export {useSignUpApi}