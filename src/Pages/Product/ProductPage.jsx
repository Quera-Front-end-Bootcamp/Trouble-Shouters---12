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
  const { productId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://63ba74b04482143a3f27f44a.mockapi.io/users/${productId}`)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <>
    <DesProduct percent={data.percent*10} endDate={data.endDate} startDate={data.startDate} name={data.name} teacher={data.teacher}/>
    <ProductDetails/>
    <Benefits/>
    <FooterComponents/>
    </>
  )
}

export default ProductPage