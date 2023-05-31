import { useAppContext } from "../../Context/ContextAppProvider";
import { Close } from "../Icons/Close";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { closeDetail, productToShow } = useAppContext();
  const { product_name, price, image, description } = productToShow;
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
        <span className="font-medium text-2xl">$ {price}</span>
        <span className="font-medium text-md mb-2">{product_name}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  );
};

export { ProductDetail };
