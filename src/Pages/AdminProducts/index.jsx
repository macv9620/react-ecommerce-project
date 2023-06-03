import { Layout } from "../../Components/Layout"
import './ProductForm.css'

/*{
    "product_name": "Awesome Granite Bacon",
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "price": 962,
    "category": "Kids",
    "brand": "Osinski - Prosacco",
    "sku": "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    "image": "https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg"
}*/
const ProductForm = () => {
  return (
    <Layout>
    <div className="product-form">
        <h2>Create Product</h2>
        <form className="flex flex-col items-center">
          <input type="text" name="product_name" id="product_name" placeholder="Product Name" />
          <input type="text" name="description" id="description" placeholder="Description" />
          <input type="text" name="price" id="price" placeholder="Price" />
          <input type="text" name="category" id="category" placeholder="Category" />
          <input type="text" name="brand" id="brand" placeholder="Brand" />
          <input type="text" name="sku" id="sku" placeholder="Sku" />
          <input type="text" name="image" id="image" placeholder="URL Image" />
          <button type="submit">Create Product</button>
        </form>
      </div>
    </Layout>
  )
}

export {ProductForm}