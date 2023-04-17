import React from 'react'
import ProductSectionItem from './ProductSectionItem'
import { storeData } from '../../../assets/data/dummyData'

const ProductSection = () => {
  return (
    <div className='productSectionContainer'>
        <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
            <h2 className='text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none'>
                Summer T-Shirt Sale 30%
            </h2>
        </div>
        <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
            {storeData && storeData.slice(0,6).map((product,index)=>{
                return(
                    <div key={index}>
                        <ProductSectionItem product={product}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductSection