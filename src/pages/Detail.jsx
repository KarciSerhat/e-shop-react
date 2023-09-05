import { useEffect } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/ProductSlice'
import DetailComp from '../components/detail/DetailComp'
import Loading from '../components/Loading'

const Detail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.products.productDetail);
    const productDetailStatus = useSelector(state => state.products.productDetailStatus);

    useEffect(() => {
      dispatch(getDetailProduct(id))
    
      }, [dispatch,id])
      
      console.log(productDetail,"detay")
    
  return (
    <div>
        {
            productDetailStatus == "LOADİNG" ? <Loading/> :  <DetailComp productDetail = {productDetail}/>
        }
       
    </div>
  )
}

export default Detail