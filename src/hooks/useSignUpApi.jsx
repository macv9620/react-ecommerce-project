import { useEffect, useState } from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3000/register'

const useSignUpApi = (dataToPost) => {
    const[signUpResponse, setSignUpResponse] = useState(null)

useEffect(()=>{
    if(dataToPost){
        console.log('Llamar a API SignUp')
        console.log(dataToPost)
        axios.post(BASE_URL, dataToPost)
        .then(res => {
            setSignUpResponse(res)
            console.log('status 200', res)
        })
        .catch(err => {
            setSignUpResponse(err)
            console.log(err)
        })
    }
}, [dataToPost])

return{signUpResponse}

}

export {useSignUpApi}