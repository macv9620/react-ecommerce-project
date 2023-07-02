import { useAppContext } from "../../Context/ContextAppProvider";
import { Cart } from "../Icons/Cart";
import { Close } from "../Icons/Close";
import { QuantityCartHandler } from "../QuantityCartHandler";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { closeDetail, showDetail, productToShow, cartItems, addToCart } = useAppContext();
  const { product_name, price, image, description, id } = productToShow;

  const isItemInCart = cartItems.filter((item)=>(
    item.id === id
  )).length > 0

  const hasToCloseDetail = false
  return (
     <aside className={showDetail
     ? "product-detail fixed right-0 border border-black rounded bg-white"
     : "hide-detail fixed right-0 border border-black rounded bg-white"
     }>

      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <div className="cursor-pointer" onClick={closeDetail}>
          <Close />
        </div>
      </div>
      <div className="detail-overflow">
      <figure className="px-6">
        <img 
        className="w-full h-full rounded-lg" 
        src={image} 
        alt={product_name}/>
      </figure>
      <div className="flex flex-col px-6">
        <div className="flex items-center">
        <span className="font-medium text-2xl">$ {price}</span>
        {isItemInCart && (
          <span className="add-button w-14 h-6 m-2 text-xs cursor-default">
          <QuantityCartHandler
          product={productToShow}
          hasToCloseDetail={hasToCloseDetail}
           />
           </span>
        )}

        {!isItemInCart && (
          <button
            className="custom-add flex justify-center items-center w-6 h-6 rounded-full m-2 text-xs"
            onClick={(event) => addToCart(event, productToShow, hasToCloseDetail)}
          >
            <Cart />
          </button>
        )}
        </div>
        <span className="font-medium text-md mb-2">{product_name}</span>
        <span className="font-light text-sm">{description}</span>
      </div>
      </div>
    </aside>
  );
};

export { ProductDetail }
