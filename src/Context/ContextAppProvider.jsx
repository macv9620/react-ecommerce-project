import { createContext, useContext, useState } from "react";
import {useProductsApi} from '../customHooks/useProductsApi'

const AppContext = createContext()

const ContextAppProvider = ({children})=> {
// Api Info
    const { products } = useProductsApi()

//Shopping cart - items list / addToCart
    const [cartItems, setCartItems] = useState([])
    const addToCart = (product)=> {
        setCartItems([...cartItems, product])
        console.log(cartItems);
    }

//Product Detail - Open / Close
    const [showDetail, setShowDetail] = useState(false)
    const openDetail = (product)=> {
        setProductToShow(product)
        setShowDetail(true)
    }
    const closeDetail = ()=> setShowDetail(false)

//Product Detail - Info to Show Aside Detail
    const [productToShow, setProductToShow] = useState({})

//Context Value
    const valuesObject = {
        products: products,


        showDetail: showDetail,
        openDetail: openDetail,
        closeDetail: closeDetail,
        productToShow: productToShow,
        setProductToShow: setProductToShow,
        cartItems: cartItems,
        addToCart: addToCart,
    }

return(
    <AppContext.Provider value={valuesObject}>
        {children}
    </AppContext.Provider>
)
}

const useAppContext = () => {
    const contextValue = useContext(AppContext)
    return contextValue
}

export {ContextAppProvider, useAppContext}