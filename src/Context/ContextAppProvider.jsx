import { createContext, useContext, useState } from "react";
import {useProductsApi} from '../customHooks/useProductsApi'

const AppContext = createContext()

const ContextAppProvider = ({children})=> {
// Api Info
    const { products } = useProductsApi()

//Shopping cart - Counter
    const [cartCounter, setCartCounter] = useState(0)

//Shopping cart - items list

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
        cartCounter: cartCounter,
        setCartCounter: setCartCounter,
        showDetail: showDetail,
        openDetail: openDetail,
        closeDetail: closeDetail,
        productToShow: productToShow,
        setProductToShow: setProductToShow,
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