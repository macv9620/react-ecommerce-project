import { useEffect, useState } from "react"
import axios from "axios"
import FormData from "form-data"

const useHostImg = (imgBase64) => {
    const[imgPostResponse, setImgPostResponse] = useState(null)

    useEffect(()=>{
        if(imgBase64){

        let data = new FormData();
        data.append('image', imgBase64)

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.imgbb.com/1/upload?key=c74847e2b53542a6a42b112e5ce3862e',
            headers: { 
              "Content-Type": "multipart/form-data"
            },
            data : data
          };

          axios.request(config)
          .then((response) => {
            setImgPostResponse((response.data));
          })
          .catch((error) => {
            console.log(error);
          });
        }
      },[imgBase64])
      return {imgPostResponse}
}

export {useHostImg}