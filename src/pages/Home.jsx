import React, { useState } from 'react'
import SliderComponent from '../components/home/SliderComponent'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

const Home = () => {
  const [sort, setSort] = useState('')
  const [category, setCategory] = useState('')
  return (
    <div className=''>
        <SliderComponent/>
        <Sorting setSort = {setSort}/>
        <div className='flex'>
            <Category setCategory = {setCategory}/>
            <Products category = {category} sort = {sort}/>
        </div>
    </div>
  )
}

export default Home