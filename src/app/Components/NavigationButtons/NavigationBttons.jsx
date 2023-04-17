import { Button } from '@material-tailwind/react'
import clothes from "../../../assets/images/clothes.jpg"
import { useDispatch } from 'react-redux'
import { filteredProducts } from '../../../features/Slices/productSlice'
import { Link } from 'react-router-dom'

const NavigationBttons = () => {
    const buttons = [
        "Hoodies",
        "Dresses",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags",
    ]

    const dispatch = useDispatch()
  return (
    <div className='navigationButtonsContainer'>
        <div className="flex item-center justify-center py-8">
            {buttons && buttons.map((item,index)=>{
                return(
                    <Link to={'/filteredProducts/'+ item}>
                    <div key={index} className="mr-4">
                        <Button onClick={()=> dispatch(filteredProducts(item))} color='gray' size='lg' variant='outlined' ripple={true} className='hover:bg-green-300 duration-300 ease-in-out'>
                            {item}
                        </Button>
                    </div>
                    </Link>
                )
            })}
        </div>
        <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md">
            <h3 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none">
                Sales upto 50%
            </h3>
        </div>
        <div className='flex items-center justify-center py-4'>
            <img className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600' src={clothes} alt="" />
        </div>
    </div>
  )
}

export default NavigationBttons