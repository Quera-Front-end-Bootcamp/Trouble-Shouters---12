import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Benefits from '../../components/Benefits/Benefits'
import DesProduct from '../../components/DesProduct/DesProduct'
import FooterComponents from '../../components/Footer/FooterComponents'
import ProductDetails from '../../components/productDetails/ProductDetails'
const baseURL = "https://63d911df74f386d4efe3ee3d.mockapi.io/products";


const ProductPage = () => {

  // const [products, setProducts] = useState(null);
  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);


  // const {productId} = useParams()
  // const thisProduct = products.find(prod => prod.id === productId)
  // console.log(thisProduct);
  return (
    <>
    <DesProduct/>
    <ProductDetails/>
    <Benefits/>
    <FooterComponents/>
    </>
  )
}

export default ProductPage