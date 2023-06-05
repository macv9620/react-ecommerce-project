import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { useForm } from "../../hooks/useForm";
import "./ProductForm.css";
import { useHostImg } from "../../hooks/useHostImg";


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

  const handleOnchange = (e) => {
    setInput((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };
  
  const [imgBase64, setImgBase64] = useState(null)
  const {imgPostResponse} = useHostImg(imgBase64)



  useEffect(()=>{
    if(imgPostResponse){
      console.log('Posting IMG')
      const getURL = imgPostResponse.data.image.url
      const inputCopy = {...input, ['image']: getURL}
      setInput(inputCopy)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgPostResponse])


  const handleOnchangeIMG = (e) => {

    const selectedfile = e.target.files;
    if (selectedfile.length > 0) {
      const [imageFile] = selectedfile;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const srcData = fileReader.result;
        const separate = srcData.split(',')
        const base64Code = separate[1]
        setImgBase64(base64Code)
      };
      fileReader.readAsDataURL(imageFile);
    }

    e.target.value = null
  };



  const {
     input,
     setInput, 
     handleSubmit, 
     requiredMessage,
    } = useForm(data, dataTextRequiredToShow);

  return (
    <Layout>
      <div className="product-form">
        <h2>Create Product</h2>
        <form
          className="flex flex-col items-center"
          autoComplete="off"
          onSubmit={(e)=> {
            handleSubmit(e)
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
          <p>{input.image}</p>
          <input
            type="file"
            name="image"
            id="image"
            placeholder="URL Image"
            onChange={handleOnchangeIMG}
          />
          <p className="required-message">{requiredMessage}</p>
          <button type="submit">Create Product</button>
        </form>
      </div>
    </Layout>
  );
};

export { ProductForm };
