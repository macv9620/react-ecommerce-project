import { createContext, useContext, useState } from "react";
import { useGetProductsApi } from "../services/useGetProductsApi";


const AppContext = createContext()

// eslint-disable-next-line react/prop-types
const ContextAppProvider = ({children})=> {

    // Render loading spinner
    const[renderLoadingSpinner, setRenderLoadingSpinner] = useState(false)

    // Show hide logout modal
    const[showLogoutModal, setShowLogoutModal] = useState(false)

    // Show hide my-account-modal
    const[showMyAccountModal, setShowMyAccountModal] = useState(false)

    // Render error page
    const[renderErrorPage, setRenderErrorPage] = useState(false)

    // Show burger menu in mobile
    const [showBurger, setShowBurger] = useState(false)

    // Render modal message to control success or error when calling apis
    const[showModalMessage, setShowModalMessage] = useState(false)
    const[modalMessageToShow, setModalMessageToShow] = useState({
        message: '',
        type: ''
    })

// Api Info
    const { products, setUpdateProducts } = useGetProductsApi(setRenderLoadingSpinner, setRenderErrorPage)

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
        setShowBurger(false)
        setShowMyAccountModal(false)
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
        products,
        showDetail,
        openDetail,
        closeDetail,
        productToShow,
        setProductToShow,
        cartItems,
        addToCart,
        removeFromCart,
        closeSideCheckoutMenu,
        openSideCheckoutMenu,
        showCheckoutSide,
        deleteIdFromCart,
        orders,
        setOrders,
        setCartItems,
        searchInput, 
        setSearchInput,
        clearSearchInput,
        setShowDetail,
        setShowCheckoutSide,
        renderLoadingSpinner,
        setRenderLoadingSpinner,
        renderErrorPage,
        showLogoutModal, 
        setShowLogoutModal,
        showMyAccountModal, 
        setShowMyAccountModal,
        setUpdateProducts,
        showModalMessage, 
        setShowModalMessage,
        modalMessageToShow, 
        setModalMessageToShow,
        showBurger, 
        setShowBurger
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