import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "../Context/ContextAppProvider"

const BASE_URL = 'http://localhost:3000/register'

const useSignUpApi = (dataToPost, clearForm) => {
    const[signUpResponse, setSignUpResponse] = useState(null)
    const{setRenderLoadingSpinner} = useAppContext()


useEffect(()=>{
    if(dataToPost){
        setRenderLoadingSpinner(true)
        setTimeout(() => {
            console.log('Llamar a API SignUp')
            console.log(dataToPost)
            axios.post(BASE_URL, dataToPost)
            .then(res => {
                setSignUpResponse(res)
                console.log('status 200', res)
                setRenderLoadingSpinner(false)
                clearForm()
            })
            .catch(err => {
                setSignUpResponse(err)
                console.log(err)
                setRenderLoadingSpinner(false)
            })
        }, 2000);
    }
}, [dataToPost])

return{signUpResponse}

}

export {useSignUpApi}