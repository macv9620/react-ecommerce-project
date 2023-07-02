import { useEffect, useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { useAppContext } from "../Context/ContextAppProvider";

const useHostImg = (imgBase64, setRequestResult, setImgBase64) => {
  const [imgPostResponse, setImgPostResponse] = useState(null);
    const {setRenderLoadingSpinner } = useAppContext()
  useEffect(() => {
    if (imgBase64) {
      setRenderLoadingSpinner(true)
        let data = new FormData();
        data.append("image", imgBase64);

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://api.imgbb.com/1/upload?key=c74847e2b53542a6a42b112e5ce3862e",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: data,
        };
        axios
          .request(config)
          .then((response) => {
            setImgPostResponse(response.data);
            setRenderLoadingSpinner(false)
            setImgBase64('')
          })
          .catch((error) => {
            setRequestResult('Sorry, an error has ocurred, please attach again the image or use the "From URL" option.')
            console.log(error);
            setRenderLoadingSpinner(false)
            setImgBase64('')
          });
    }
  }, [imgBase64]);
  return {
    imgPostResponse,
  };
};

export { useHostImg };
