import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useSelector } from 'react-redux'
import { store } from '../State/store'

export const Favorites = () => {
  const {auth}=useSelector(store=>store)
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>

      </h1>
      <div className='flex flex-wrap gap-4 justify-center'>
          {auth.favorites.map((item)=><RestaurantCard item={item}/>)}
      </div>
    </div>
  )
}
