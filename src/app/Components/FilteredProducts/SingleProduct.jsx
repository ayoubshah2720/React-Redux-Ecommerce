import { Button, Tooltip } from '@material-tailwind/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../../features/Slices/cartSlice';

const SingleProduct = () => {
    const {id} = useParams();
    const product = useSelector((state)=> state.products.singleProduct)
    console.log('productsssssssssssss',product)
    const productSize = product[0]?.size ? product[0]?.size[0] : '';
    const productColor = product[0]?.color ? product[0]?.color[0] : '';
    const [size, setSize] = useState(productSize)
    const [color, setColor] = useState(productColor)
    const dispatch = useDispatch()
  return (
    <div className='singleProductContainer'>
      {product && product.filter((element)=> element.id == id).map((item,index)=>{
        return(
          <div key={index} className='flex justify-center items-center py-10'>
            <div className='pl-44 grow-[2]'>
              <img className='h-[850px] rounded-lg' src={item.img} alt={item.name}/>
            </div>
            <div className='grow-[3]'>
            <div className='max-w-lg'>
              <h5 className='text-2xl font-inter font-bold tracking-normal leading-none'>
                {item.name}
              </h5>
              <p className='text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4'> 15% OFF </p>
              <p className='text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4'> {item.text} </p>
              <div className='pb-4'>
                {item?.size ? (
                  <div>
                  <label
                  htmlFor='size'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Pick a size
                  </label>
              <select
              id='size'
              name='size'
              value={size}
              onChange={(e)=> setSize(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {item && item.size.map((newElement, index)=>{
                  return(
                    <option key={index} value={newElement}> {newElement} </option>
                  )
                })}
              </select>
              </div>
                ) : (
                  <div>
                  <label
                  htmlFor='size'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Pick a size
                  </label>
              <select
              id='size'
              name='size'
              value={size}
              disabled={true}
              onChange={(e)=> setSize(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {item && item?.size?.map((newElement, index)=>{
                  return(
                    <option key={index} value={newElement}> {newElement} </option>
                  )
                })}
              </select>
              </div>
                )}
              </div>
                {/* <div className=''>
                  <label
                  htmlFor='color'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Pick a size
                  </label>
              <select
              id='color'
              name='color'
              value={color}
              onChange={(e)=> setColor(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {item && item.color.map((newElement, index)=>{
                  return(
                    <option key={index} value={newElement}> {newElement} </option>
                  )
                })}
              </select>
                </div> */}
                {item?.color ? (
                  <div className='pb-4'>
                  <label
                  htmlFor='color'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Pick a color
                  </label>
              <select
              id='color'
              name='color'
              value={color}
              onChange={(e)=> setColor(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {item && item.color.map((newElement, index)=>{
                  return(
                    <option key={index} value={newElement}> {newElement} </option>
                  )
                })}
              </select>
              </div>
                ) : (
                  <div>
                  <label
                  htmlFor='color'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Pick a color
                  </label>
              <select
              id='color'
              name='color'
              value={color}
              disabled={true}
              onChange={(e)=> setColor(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {item && item?.color?.map((newElement, index)=>{
                  return(
                    <option key={index} value={newElement}> {newElement} </option>
                  )
                })}
              </select>
              </div>
                )}
                <Tooltip content="Add to cart" placement="bottom">
                  <Button 
                  className='hover:bg-green-300  hover:text-white'
                  variant="outlined"
                  color="gray"
                  size="lg"
                  ripple={true}
                  onClick={()=> dispatch(addToCart({
                    id: item.id,
                    name:item.name,
                    img:item.img,
                    text:item.text,
                    size: size,
                    color: color,
                    price: item.price,
                    amount: 1,
                    totalPrice: item.price
                  }))}
                  >
                    Add to cart 
                  </Button>
                </Tooltip>
            </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SingleProduct