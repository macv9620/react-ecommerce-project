import { Trash } from "../Icons/Trash";
import { deleteProductService } from "../../services/deleteProductService";
import { useAuthContext } from "../../Context/ContextAuthProvider";
import { useAppContext } from "../../Context/ContextAppProvider";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const DeleteProduct = ({ id, setShowCardConfirm, confirmDelete }) => {
  const { token } = useAuthContext();
  const {
    setRenderLoadingSpinner,
    setShowModalMessage,
    setModalMessageToShow,
    setUpdateProducts,
  } = useAppContext();

  const confirm = (e) => {
    e.stopPropagation();
    setShowCardConfirm(true);
  };

  useEffect(() => {
    if (confirmDelete) {
      setRenderLoadingSpinner(true);


        deleteProductService(id, token)
          .then((res) => {
            setRenderLoadingSpinner(false);
            setShowModalMessage(true);
            setModalMessageToShow({
              message: res.data.message,
              type: "success",
            });
            setUpdateProducts(true);
          })
          .catch((err) => {
            console.log(err);
            if (err.response?.status === 400) {
              setRenderLoadingSpinner(false);
              setShowModalMessage(true);
              setModalMessageToShow({
                message: err.response.data.message,
                type: "error",
              });
            } else {
              setRenderLoadingSpinner(false);
              setShowModalMessage(true);
              setModalMessageToShow({
                message: "Network problems, please try again in a moment",
                type: "error",
              });
            }
            setUpdateProducts(true);
          });

    }
  }, [confirmDelete]);

  return (
    <div onClick={(event) => confirm(event)}>
      <Trash />
    </div>
  );
};

export { DeleteProduct };
