import HashLoader from "react-spinners/HashLoader";
import './HashLoaderModal.css'

const HashLoaderModal = () => {
  return (
    <div
      className="spinner-background"
    >
      <HashLoader 
      color="#FFE800" 
      loading 
      />
    </div>
  );
};

export { HashLoaderModal };
