import { useAppContext } from "../../Context/ContextAppProvider";
import { Close } from "../Icons/Close";
import "./ProductDetail.css";

const ProductDetail = () => {
  const {closeDetail} = useAppContext()

  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          className="cursor-pointer"
          onClick={closeDetail}
        >
          <Close />
        </div>
      </div>
    </aside>
  );
};

export { ProductDetail };
