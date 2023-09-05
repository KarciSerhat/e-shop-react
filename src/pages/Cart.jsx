import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CartComp from '../components/cart/CartComp'
import { getCartTotal } from '../redux/CardSlice'

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const {carts,totalAmount,itemCount} = useSelector(state => state.carts)

  console.log(carts,totalAmount,itemCount, "sepet")

  useEffect(() => {
    dispatch(getCartTotal())
  
  
  }, [dispatch])
  return (
    <div>
        {
            carts?.length > 0 ? <div>
             {
                carts?.map((cart,i) =>(
                    <CartComp key={i} cart = {cart}/>
                ))
              }
              <div className='felx items-center justify-end text-2xl'>Toplam Tutar : <span className='font-bold text-3xl ml-1'>{totalAmount}</span></div>
             </div>:
            <div>
                Sepetiniz Boş...
            </div>
        }
    </div>
  )
}

export default Cart