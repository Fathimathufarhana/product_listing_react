
import React, { useEffect, useState } from 'react';
import "./products.css"
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ViewProduct = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [data, setData] = useState([])
  const params = useParams();
  const id = params.id

const getProduct =async () => {
  try {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`)
    let toConvertJson = await response.json()
    // console.log(toConvertJson,"toconvertjson");
    setData(toConvertJson)
  } catch (error) {
    console.log(error.message,"An error occured while fetching data");
  }
}
useEffect(() => {
  getProduct()
},[])
  

  const handleAddToCartClick = () => {
    setIsAddedToCart(true);
  };

  return (
    <div className="container">
      <div className="product-image">
        <img src={data.image} alt="product.name" className="image" />
      </div>
      <div className="product-details">
        <h2 className="product-name">{data.title}</h2>
        <p className="product-description">{data.description}</p>
        <p className="product-price">Price: ${data.price}</p>
        {isAddedToCart ? (
          <Link to="/cart">
          <button className="add-to-cart-button">Go to Cart</button>
          </Link>
        ) : (
          <button className="add-to-cart-button" onClick={handleAddToCartClick}>Add to Cart</button>
        )}
        <button className="add-to-cart-button">Buy Now</button>

      </div>
    </div>
  );
};

export default ViewProduct;
