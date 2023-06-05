import { useState } from "react"

const useForm = (data, textToPrint) => {
    const [input, setInput] = useState(data)
    const [requiredMessage, setRequiredMessage] = useState(null)

    const checkAndSendData = (objectToSend)=> {
      for(let value in objectToSend){
        if(objectToSend[value]===''){
          console.log(value, objectToSend[value])
          setRequiredMessage(`${textToPrint[value]} is required*`)
          return
        }
      }
      console.log("Informacion a enviar", objectToSend)
      setRequiredMessage(null)
      setInput(data)
    }

    
    const handleSubmit = (e)=> {
      e.preventDefault()
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