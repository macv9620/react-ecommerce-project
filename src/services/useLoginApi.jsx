import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "../Context/ContextAppProvider"

const BASE_URL = 'http://localhost:3000/login'

const useLogInApi = (dataToPost, clearForm) => {
    const[logInResponse, setLoginResponse] = useState(null)
    const{setRenderLoadingSpinner} = useAppContext()
useEffect(()=>{
    if(dataToPost){
        setRenderLoadingSpinner(true)
        console.log('Llamar a API LogIn')
        console.log(dataToPost)
        axios.post(BASE_URL, dataToPost)
        .then(res => {
            setLoginResponse(res)
            console.log('status 200', res)
            setRenderLoadingSpinner(false)
            clearForm()
        })
        .catch(err => {
            setLoginResponse(err)
            console.log(err)
            setRenderLoadingSpinner(false)
        })
    }
}, [dataToPost])

return{logInResponse}

}

export {useLogInApi}