import { createContext, useContext, useState } from "react";
import {useProductsApi} from '../customHooks/useProductsApi'

const AppContext = createContext()

const ContextAppProvider = ({children})=> {
    const { products } = useProductsApi();
    const [cartCounter, setCartCounter] = useState(0)
    
    const valuesObject = {
        products: products,
        cartCounter: cartCounter,
        setCartCounter: setCartCounter,
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