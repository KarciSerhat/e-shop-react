import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/CardSlice'

const DetailComp = ({productDetail}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)
    const decrement = () =>{
        if (quantity > 0) {
        setQuantity(quantity-1) 
        }
        
    }
    const increment = () =>{
        setQuantity(quantity+1)
    }
    const addBasket = () => {
     dispatch(addToCart({id : productDetail?.id, title : productDetail?.title, image: productDetail?.image, price: productDetail?.price}))
    }
  return (
    <div className='flex gap-10 my-10'>
        <img  className = 'w-[500px] h-[500px]' src={productDetail?.image} alt="" />
        <div className="">
            <div className='text- 3xl font-bold'>{productDetail?.title}</div>
            <div className='text- 3xl mt-10'>{productDetail?.description}</div>
            <div >Rating : {productDetail?.rate}</div>
            <div >Count : {productDetail?.count}</div>
            <div className='text- 3xl font-bold'>{productDetail?.price}<span className='text-sm'>TL</span></div>
            <div className='flex items-center gap-7 my-4'>
            <div onClick={decrement} className=' text-5xl cursor-pointer'>-</div>
            <input className='w-7 text-5xl font-bold' type="text" value={quantity} />
            <div onClick={increment} className=' text-4xl cursor-pointer'>+</div>
        </div>
        <div onClick={addBasket} className='border w-[200px] cursor-pointer bg-gray-200 text-2xl rounded-md h-16 flex items-center justify-center'>Sepete Ekle</div>
    
        </div>
        </div>
  )
}

export default DetailComp