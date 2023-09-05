import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../redux/CategorySlice';
import React from 'react'

    
    
    const Category = ({setCategory}) => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories)
    
        console.log(categories, "categories");
        useEffect(() => {

        dispatch(getCategories())

        },[dispatch])
  return (
    <div className='w-1/6 bg-gray-100 p-4'>
       <div className='border-b pb-2 text-xl font-bold'>KATEGORİ</div>
        {
            categories?.map((category,i)=>(
                <div onClick = {() => setCategory(category)} className='text-lg mt-2 cursor-pointer p-2 hover:bg-blue-500' key={i}>{category}</div>
            ))
        }
        </div>
  )
}

export default Category