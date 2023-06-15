import { Trash } from "../Icons/Trash";
import { deleteProductService } from "../../services/deleteProductService";
import { useAuthContext } from "../../Context/ContextAuthProvider";
import { useAppContext } from "../../Context/ContextAppProvider";

// eslint-disable-next-line react/prop-types
const DeleteProduct = ({ id }) => {
  const { token } = useAuthContext();
  const {
    setRenderLoadingSpinner,
    setShowModalMessage,
    setModalMessageToShow,
    setUpdateProducts
  } = useAppContext();

  const deleteProduct = (event, id) => {
    event.stopPropagation();
    setRenderLoadingSpinner(true);

    console.log("Delete product id: ", id);

    setTimeout(() => {
      deleteProductService(id, token)
        .then((res) => {
          setRenderLoadingSpinner(false);
          setShowModalMessage(true)
          setModalMessageToShow({
            message: res.data.message,
            type: 'success'
          })
          console.log(res);
          setUpdateProducts(true)
        })
        .catch((err) => {
            console.log(err)
            if(err.response?.status === 400){
                setRenderLoadingSpinner(false);
                setShowModalMessage(true)
                setModalMessageToShow({
                    message: err.response.data.message,
                    type: 'error'
                })
            } else {
                setRenderLoadingSpinner(false);
                setShowModalMessage(true)
                setModalMessageToShow({
                    message: "Network problems, please try again in a moment",
                    type: 'error'
                })
            }
            setUpdateProducts(true)
        });
    }, 3000);

  };

  return (
    <div onClick={(event) => deleteProduct(event, id)}>
      <Trash />
    </div>
  );
};

export { DeleteProduct };
