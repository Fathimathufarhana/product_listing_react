
import React, { useEffect, useState } from 'react';
import ActionAreaCard from './Card';
import './products.css'

const ProductList = () => {
    const [products,setProducts] = useState([])

    const getAllProducts =async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products")
        let toConvertJson = await response.json()
        // console.log(toConvertJson,"toconvertjson");
        setProducts(toConvertJson)
        // console.log(setProducts,"setProducts");
      } catch (error) {
        console.log(error.message,"An error occured while fetching data");
      }
    }
useEffect(() => {
  getAllProducts()
},[])

  return (
    <>
      <h1>All Products</h1>
    <div className='products'>
      {
        products.map((items,index) => {
          return(
            <ActionAreaCard data={items} key={index}/>
            
          )
        })
      }
    </div>
    </>
  );
}

export default ProductList;
