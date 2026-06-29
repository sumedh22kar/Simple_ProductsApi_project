import React, { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    const getProduct = async () => {
  const response = await axios.get(
    `https://dummyjson.com/products/${id}`
  );

  setProduct(response.data);
}
useEffect(() => {
  getProduct();
}, [id]);
if (!product) {
  return <h2>Loading...</h2>;
}
  return (
  <div className="details">
  <img src={product.thumbnail} alt={product.title} />

  <div className="info">
    <h1>{product.title}</h1>

    <p className="price-detail">₹ {product.price}</p>

    <p>{product.description}</p>

    <p>Category: {product.category}</p>

    <p>Brand: {product.brand}</p>

    <p>⭐ {product.rating}</p>

    <p>Stock: {product.stock}</p>
  </div>
</div>
)
}

export default ProductDetails