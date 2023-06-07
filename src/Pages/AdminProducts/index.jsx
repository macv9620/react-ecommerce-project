import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { useForm } from "../../hooks/useForm";
import "./ProductForm.css";
import { useHostImg } from "../../hooks/useHostImg";
import { CircleCheck } from "../../Components/Icons/CircleCheck";

const ProductForm = () => {
  const data = {
    product_name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    sku: "",
    image: "",
  };

  const dataTextRequiredToShow = {
    product_name: "Product Name",
    description: "Description",
    price: "Price",
    category: "Category",
    brand: "Brand",
    sku: "Sku",
    image: "URL Image",
  };

  const apiPostForm = (data)=> {
    console.log('Here Post data CreateProduct: ', data)
  }

  const { input, setInput, handleSubmit, requestResult, setRequestResult
 } = useForm(data, dataTextRequiredToShow, apiPostForm);

  const [imgBase64, setImgBase64] = useState(null);
  const { imgPostResponse} = useHostImg(imgBase64, setRequestResult, setImgBase64);


  const handleOnchange = (e) => {
    setInput((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnchangeIMG = (e) => {
    console.log('CHANGING')
    const selectedfile = e.target.files;
    if (selectedfile.length > 0) {
      const [imageFile] = selectedfile;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const srcData = fileReader.result;
        const separate = srcData.split(",");
        //ORGANIZAR ACTUALIZACIÓN DE CARGA DEL HOST DE LA IMAGEN
        //const base64Code = [...separate][1];
        setImgBase64([...separate][1]);
      };
      fileReader.readAsDataURL(imageFile);
    }
    e.target.value = null;
  };

  useEffect(() => {
    if (imgPostResponse) {
      const getURL = imgPostResponse.data.image.url;
      const inputCopy = { ...input, ["image"]: getURL };
      setInput({...inputCopy});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgPostResponse]);

  return (
    <Layout>
      <div className="product-form">
        <h2>Create Product</h2>
        <form
          className="flex flex-col items-center"
          autoComplete="off"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            name="product_name"
            id="product_name"
            placeholder="Product Name"
            value={input.product_name}
            onChange={handleOnchange}
          />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            value={input.description}
            onChange={handleOnchange}
          />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            value={input.price}
            onChange={handleOnchange}
          />
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Category"
            value={input.category}
            onChange={handleOnchange}
          />
          <input
            type="text"
            name="brand"
            id="brand"
            placeholder="Brand"
            value={input.brand}
            onChange={handleOnchange}
          />
          <input
            type="text"
            name="sku"
            id="sku"
            placeholder="Sku"
            value={input.sku}
            onChange={handleOnchange}
          />
          <div className="img-upload-container">
            {input.image ? (
              <>
                <p className="flex items-center">
                  Image attached successfully <CircleCheck />
                </p>
                <p className="text-xs">{input.image}</p>
              </>
            ) : null}
            {!input.image ? (
              <>
                <p>Attach a Product Image:</p>
                <input
                  type="file"
                  name="image"
                  id="image"
                  placeholder="URL Image"
                  onChange={handleOnchangeIMG}
                />
              </>
            ) : null}
          </div>
          <p className="required-message">{requestResult}</p>
          <button type="submit">Create Product</button>
        </form>
      </div>
    </Layout>
  );
};

export { ProductForm };
