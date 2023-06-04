import { useEffect, useState } from "react"

const useProductsApi = ()=>{
const [products, setProducts]= useState(null)

useEffect(()=>{
    fetch('http://localhost:3000/items')
    .then((res)=> res.json())
    .then((products)=> setProducts(products))
    .catch((err)=> console.log(err))
},[])

return {products}
}

export {useProductsApi}