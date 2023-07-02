import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "../Context/ContextAppProvider"
import { useAuthContext } from "../Context/ContextAuthProvider"

const BASE_URL = 'https://get-yours.onrender.com/login'

const useLogInApi = (dataToPost, clearForm) => {
    const[logInResponse, setLoginResponse] = useState(null)
    const{setRenderLoadingSpinner} = useAppContext()
    const{setToken} = useAuthContext()

useEffect(()=>{
    if(dataToPost){
        setRenderLoadingSpinner(true)
        axios.post(BASE_URL, dataToPost)
        .then(res => {
            setLoginResponse(res)
            if(res.status === 200){
                const jwt = res.data.token
                setToken(jwt)
            }
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