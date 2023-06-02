import { useAppContext } from "../../Context/ContextAppProvider";
import { Add } from "../Icons/Add";
import { Close } from "../Icons/Close";
import { QuantityCartHandler } from "../QuantityCartHandler";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { closeDetail, productToShow, cartItems, addToCart } = useAppContext();
  const { product_name, price, image, description, id } = productToShow;

  const isItemInCart = cartItems.filter((item)=>(
    item.id === id
  )).length > 0

  const hasToCloseDetail = false
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div className="cursor-pointer" onClick={closeDetail}>
          <Close />
        </div>
      </div>

      <figure className="px-6">
        <img 
        className="w-full h-full rounded-lg" 
        src={image} 
        alt={product_name}/>
      </figure>
      <p className="flex flex-col p-6">
        <div className="flex items-center">
        <span className="font-medium text-2xl">$ {price}</span>
        {isItemInCart && (
          <div className="custom-add w-14 h-6 m-2 text-xs cursor-default">
          <QuantityCartHandler
          product={productToShow}
          hasToCloseDetail={hasToCloseDetail}
           />
           </div>
        )}

        {!isItemInCart && (
          <button
            className="custom-add flex justify-center items-center w-6 h-6 rounded-full m-2 text-xs"
            onClick={(event) => addToCart(event, productToShow, hasToCloseDetail)}
          >
            <Add />
          </button>
        )}
        </div>
        <span className="font-medium text-md mb-2">{product_name}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  );
};

export { ProductDetail }
