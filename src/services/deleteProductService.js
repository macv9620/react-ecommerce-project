import axios from "axios";
const BASE_URL = "http://localhost:3000/product";

const deleteProductService = (id, token) => {
  let data = JSON.stringify({ id });
  console.log(token);
  console.log(`Bearer ${token}`);
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  return axios.request(config);
};

export { deleteProductService };
