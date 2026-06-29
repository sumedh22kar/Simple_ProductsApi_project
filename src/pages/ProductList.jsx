import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from "../components/Pagination";
const ProductList = () => {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true)

    const [page, setPage] = useState(1)

    const limit = 10
    const skip = (page -1) * limit


    const getData = async () => {
        setLoading(true)
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

    setProducts(response.data.products);
    setLoading(false)
  }

     useEffect(() =>{
         getData();
   },[page]);

  return (
    <div>
        <div className="product-list">
      {loading ? (
        <h1>Loading..</h1>
      ):
      products.length === 0 ? (
        <h2>No Data Found</h2>
      ) : (
       products.map((elem) => (
             <ProductCard key={elem.id} product={elem} />
        ))
    )}
    </div>
    <div>
        <Pagination
          page={page}
          setPage={setPage}
        />
    
        </div>
    </div>
  )
}

export default ProductList