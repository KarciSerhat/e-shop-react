import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
        <select onChange={e => setSort(e.target.value)} className='bg-white' name="" id="">
            <option disabled value="">Seçiniz</option>
            <option value="inc">ARTAN</option>
            <option value="dec">AZALAN</option>
        </select>
    </div>
  )
}

export default Sorting