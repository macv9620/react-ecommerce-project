import { createContext, useContext, useState } from "react";
import {useProductsApi} from '../customHooks/useProductsApi'

const AppContext = createContext()

// eslint-disable-next-line react/prop-types
const ContextAppProvider = ({children})=> {
// Api Info
    const { products } = useProductsApi()

//Shopping cart - items list / addToCart / deleteFromCart
    const [cartItems, setCartItems] = useState([])
    const addToCart = (event, product)=> {
        event.stopPropagation()
        setCartItems([...cartItems, product])
        closeDetail()
        //openSideCheckoutMenu()
    }

    const deleteIdFromCart = (id)=> {
        const updatedCart = cartItems.filter((item)=>(
            item.id !== id
        ))
        setCartItems(updatedCart)
    }

    

//Product Detail - Open / Close
    const [showDetail, setShowDetail] = useState(false)
    const openDetail = (product)=> {
        setProductToShow(product)
        setShowCheckoutSide(false)
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

// Order checkout main information
    const [orders, setOrders] = useState([])


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
        deleteIdFromCart: deleteIdFromCart,
        orders: orders,
        setOrders: setOrders,
        setCartItems: setCartItems,
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

// eslint-disable-next-line react-refresh/only-export-components
export {ContextAppProvider, useAppContext}