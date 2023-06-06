import { useEffect, useState } from "react";
import axios from "axios";
import FormData from "form-data";

const useHostImg = (imgBase64) => {
  const [imgPostResponse, setImgPostResponse] = useState(null);
  const [postingImg, setPostingImg] = useState(false);

  useEffect(() => {
    if (imgBase64) {
      setPostingImg(true);
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
            setPostingImg(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 2000);
    }
  }, [imgBase64]);
  return {
    imgPostResponse,
    postingImg,
  };
};

export { useHostImg };
