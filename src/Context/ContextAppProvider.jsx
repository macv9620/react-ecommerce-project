import { createContext, useContext, useState } from "react";
import {useProductsApi} from '../customHooks/useProductsApi'

const AppContext = createContext()

const ContextAppProvider = ({children})=> {
    const { products } = useProductsApi()
    const [cartCounter, setCartCounter] = useState(0)
    const [showDetail, setShowDetail] = useState(false)

    const openDetail = ()=> {
        setShowDetail(true)
    }
    
    const closeDetail = ()=> {
        setShowDetail(false)
    }

    const valuesObject = {
        products: products,
        cartCounter: cartCounter,
        setCartCounter: setCartCounter,
        showDetail: showDetail,
        openDetail: openDetail,
        closeDetail: closeDetail,
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