import { useEffect, useState } from "react"

const useProductsApi = ()=>{
const [products, setProducts]= useState(null)

useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((res)=> res.json())
    .then((products)=> setProducts(products))
    .catch((err)=> console.log(err))
},[])

return {products}
}

export {useProductsApi}