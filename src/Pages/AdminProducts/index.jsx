import { Layout } from "../../Components/Layout";
import { useForm } from "../../hooks/useForm";
import "./ProductForm.css";

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
  }

  const handleOnchange = (e) => {
    setInput((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };


  const { input, setInput, handleSubmit, requiredMessage } = useForm(data, dataTextRequiredToShow);

  return (
    <Layout>
      <div className="product-form">
        <h2>Create Product</h2>
        <form
          className="flex flex-col items-center"
          autoComplete="off"
          onSubmit={handleSubmit}
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
          <input
           type="text" 
           name="image" 
           id="image" 
           placeholder="URL Image" 
           value={input.image}
           onChange={handleOnchange}
          />
          <p className="required-message">{requiredMessage}</p>
          <button type="submit">Create Product</button>
        </form>
      </div>
    </Layout>
  );
};

export { ProductForm };
