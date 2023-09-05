import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './CategorySlice'
import ProductSlice from './ProductSlice'
import CardSlice from './CardSlice'

export default configureStore({
  reducer: {
    categories : CategorySlice,
    products :ProductSlice,
    carts : CardSlice
  },

})