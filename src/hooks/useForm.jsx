import { useState } from "react"

const useForm = (data, textToPrint) => {
    const [input, setInput] = useState(data)
    const [requiredMessage, setRequiredMessage] = useState(null)
    const checkAndSendData = (objectToSend)=> {
      for(let value in objectToSend){
        if(objectToSend[value]===''){
          setRequiredMessage(`${textToPrint[value]} is required*`)
          return
        }
      }
      console.log("Informacion a enviar", objectToSend)
      setRequiredMessage(null)
      setInput(data)
    }

    const handleSubmit = (e, imgURL)=> {
        console.log('handleS: ')
        e.preventDefault()
        setInput(previousValue => ({...previousValue, ['image']: imgURL}))
        checkAndSendData(input)
    }

  return {
    input,
    setInput,
    handleSubmit,
    requiredMessage,
    setRequiredMessage,
  }
  
}

export {useForm}