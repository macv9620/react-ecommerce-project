import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { useForm } from "../../hooks/useForm";
import "./ProductForm.css";
import { CircleCheck } from "../../Components/Icons/CircleCheck";
import { useHostImg } from "../../services/useHostImg";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/ContextAuthProvider";
import { useCreateItemApi } from "../../services/useCreateItemApi";
import { useAppContext } from "../../Context/ContextAppProvider";

const ProductForm = () => {
  const { user } = useAuthContext();
  const [postData, setPostData] = useState(null);
  const [fieldSetValue, setFieldSetValue] = useState("");
  const navigate = useNavigate();
  const { setUpdateProducts } = useAppContext();

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

  const apiPostForm = (data) => {
    setPostData(data);
  };

  const clearForm = () => {
    setInput(data);
  };

  const { createItemResponse } = useCreateItemApi(postData, clearForm);

  useEffect(() => {
    if (createItemResponse) {
      if (createItemResponse.code === "ERR_NETWORK") {
        setRequestResult(
          "We are having problems, please try again in a moment"
        );
      } else if (
        createItemResponse.response?.status === 400 ||
        createItemResponse.response?.status === 401 ||
        createItemResponse.response?.status === 404
      ) {
        setRequestResult("Uncontrolled error");
      } else if (createItemResponse.status === 200) {
        setRequestResult("Item succesfully created");
        setUpdateProducts(true);
        navigate("../");
      } else {
        setRequestResult("Uncontrolled error");
      }
    }
  }, [createItemResponse]);

  const { input, setInput, handleSubmit, requestResult, setRequestResult } =
    useForm(data, dataTextRequiredToShow, apiPostForm);

  const [imgBase64, setImgBase64] = useState(null);
  const { imgPostResponse } = useHostImg(
    imgBase64,
    setRequestResult,
    setImgBase64
  );

  const handleOnchange = (e) => {
    setInput((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnchangeIMG = (e) => {
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

  const handleOnchangeFieldSet = (event) => {
    setFieldSetValue(event.target.value);
    setRequestResult("");
    setInput((previousValue) => ({
      ...previousValue,
      image: "",
    }));
  };

  useEffect(() => {
    if (imgPostResponse) {
      const getURL = imgPostResponse.data.image.url;
      const inputCopy = { ...input, ["image"]: getURL };
      setInput({ ...inputCopy });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgPostResponse]);

  if (user.role !== "ADMIN") {
    return <Navigate to="/" />;
  }

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
        <div className="fieldset-product-container">
          <fieldset className="fieldset-product-img">
            <legend> Attach a Product image: </legend>
            <div className="fieldset-product-img-options">
              <div>
                <input
                  type="radio"
                  id="localFile"
                  name="drone"
                  value="localFile"
                  checked={fieldSetValue === "localFile"}
                  onChange={handleOnchangeFieldSet}
                />
                <label htmlFor="localFile">From Local</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="URL"
                  name="drone"
                  value="URL"
                  checked={fieldSetValue === "URL"}
                  onChange={handleOnchangeFieldSet}
                />
                <label htmlFor="URL">From URL</label>
              </div>
            </div>
          </fieldset>

          {fieldSetValue === "localFile" && (
            <div className="img-upload-container">
              {input.image ? (
                <>
                  <p className="flex items-center">
                    Image attached successfully <CircleCheck />
                  </p>
                  <img className="img-preview" src={input.image} />
                  {/*<p className="text-xs">{input.image}</p>*/}
                </>
              ) : null}
              {!input.image ? (
                <>
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
          )}

          {fieldSetValue === "URL" && (
            <input
              type="text"
              name="image"
              id="image"
              placeholder="URL Image"
              value={input.image}
              onChange={handleOnchange}
            />
          )}
          </div>
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

          <p className="required-message">{requestResult}</p>
          <button type="submit">Create Product</button>
        </form>
      </div>
    </Layout>
  );
};

export { ProductForm };
