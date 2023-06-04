import { createContext, useContext, useState } from "react";
import {useProductsApi} from '../hooks/useProductsApi'

const AppContext = createContext()

// eslint-disable-next-line react/prop-types
const ContextAppProvider = ({children})=> {
// Api Info
    const { products } = useProductsApi()

//Shopping cart - items list / addToCart / removeFromCart / deleteFromCart
    const [cartItems, setCartItems] = useState([])
    const addToCart = (event, product, hasToCloseDetail = true)=> {
        event.stopPropagation()
        const indexItemIsAlreadyAdded = cartItems.findIndex((cartItem)=> cartItem.id === product.id)

        if(indexItemIsAlreadyAdded === -1){
            const copyProductToUpdateQuantity = {...product, ['productQuantity']: 1}
            setCartItems([...cartItems, copyProductToUpdateQuantity])
        }else{
            const copyCartToUpdateQuantity = [...cartItems]
            copyCartToUpdateQuantity[indexItemIsAlreadyAdded]['productQuantity'] = copyCartToUpdateQuantity[indexItemIsAlreadyAdded]['productQuantity'] + 1
            setCartItems(copyCartToUpdateQuantity)
        }

        if(hasToCloseDetail){
            closeDetail()
        }
    }

    const removeFromCart = (event, product, hasToCloseDetail = true)=> {
        event.stopPropagation()
        const indexItemIsAlreadyAdded = cartItems.findIndex((cartItem)=> cartItem.id === product.id)
        const copyCartToUpdateQuantity = [...cartItems]
        let productQuantity = copyCartToUpdateQuantity[indexItemIsAlreadyAdded]['productQuantity']


        if(productQuantity > 1){
            copyCartToUpdateQuantity[indexItemIsAlreadyAdded]['productQuantity'] = copyCartToUpdateQuantity[indexItemIsAlreadyAdded]['productQuantity'] -1 
            setCartItems([...copyCartToUpdateQuantity])
        }else{
            deleteIdFromCart(product.id)
        }

        if(hasToCloseDetail){
            closeDetail()
        }
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

// search Bar Value
    const [searchInput, setSearchInput] = useState("");

// Clear searchInput
    const clearSearchInput = ()=>{
        setSearchInput("")
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
        removeFromCart: removeFromCart,
        closeSideCheckoutMenu: closeSideCheckoutMenu,
        openSideCheckoutMenu: openSideCheckoutMenu,
        showCheckoutSide: showCheckoutSide,
        deleteIdFromCart: deleteIdFromCart,
        orders: orders,
        setOrders: setOrders,
        setCartItems: setCartItems,
        searchInput: searchInput, 
        setSearchInput: setSearchInput,
        clearSearchInput: clearSearchInput,
        setShowDetail: setShowDetail,
        setShowCheckoutSide: setShowCheckoutSide
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