import { createContext, useContext, useState } from "react";
import {useProductsApi} from '../customHooks/useProductsApi'

const AppContext = createContext()

const ContextAppProvider = ({children})=> {
// Api Info
    const { products } = useProductsApi()

//Shopping cart - items list / addToCart
    const [cartItems, setCartItems] = useState([])
    const addToCart = (event, product)=> {
        event.stopPropagation()
        setCartItems([...cartItems, product])
        console.log(cartItems);
        //openSideCheckoutMenu()
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

// Checkout Side Menu Close / Open
    const [showCheckoutSide, setShowCheckoutSide] = useState(false)
    const closeSideCheckoutMenu = ()=> {
        setShowCheckoutSide(false)
    }
    const openSideCheckoutMenu = ()=> {
        setShowCheckoutSide(!showCheckoutSide)
        closeDetail()
    }


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
        closeSideCheckoutMenu: closeSideCheckoutMenu,
        openSideCheckoutMenu: openSideCheckoutMenu,
        showCheckoutSide: showCheckoutSide,
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