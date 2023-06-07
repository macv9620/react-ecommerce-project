import { useEffect, useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { useAppContext } from "../Context/ContextAppProvider";

const useHostImg = (imgBase64, setRequestResult) => {
  const [imgPostResponse, setImgPostResponse] = useState(null);
    const {setRenderLoadingSpinner } = useAppContext()
  useEffect(() => {
    if (imgBase64) {
      setRenderLoadingSpinner(true)
      setTimeout(() => {
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
          })
          .catch((error) => {
            setRequestResult(error.message)
            console.log(error);
            setRenderLoadingSpinner(false)
          });
      }, 2000);
    }
  }, [imgBase64]);
  return {
    imgPostResponse,
  };
};

export { useHostImg };
