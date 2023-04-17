import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const FilteredProducts = () => {
    const products = useSelector((state)=> state.products.filteredProducts)
    console.log("products",products)
    const { type } = useParams()
    console.log("type",type)
  return (
    <div className='filteredProductsContainer'>
        <div className="pt-16">
            <div className="pl-14">
                <h1 className='text-4xl text-gray-600 font-inter font-bold tracking-normal leading-none'>
                    {type}
                </h1>
            </div>
            <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
                {products && products.filter((product)=> product.type === type).map((product,index)=>{
                    return(
                    <div key={index}>
                        <ProductCard product={product}/>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default FilteredProducts