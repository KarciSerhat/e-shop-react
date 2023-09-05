import React from 'react'
import { removeFromCart } from '../../redux/CardSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({cart}) => {
    const dispatch = useDispatch()
  return (
    <div className='my-10 flex items-center justify-between'>
        <img className='w-[150px] h-[150px] object-cover' src={cart?.image}/>
        <div className='w-[500px]'>
            <div className='text-xl'>{cart?.title}</div>
            <div>{cart?.description}</div>
            </div>
            <div className='font bold text-2xl'>{cart?.price} TL</div>
            <div onClick={() =>dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white w[150px] h-16 flex items-center justify-center cursor-pointer rounded-md'>Ürünü Sil</div>
        
    </div>
  )
}

export default CartComp