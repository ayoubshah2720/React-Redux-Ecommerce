import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "../../../features/Slices/productSlice";

const ProductCard = ({product}) => {
  let dispatch = useDispatch()
  let { type } = useParams()
  return (
    <div className='productCardContainer'>
      <Link to={`/filteredProducts/${type}/`+ product.id}>
        <Card className="w-96" onClick={()=> dispatch(singleProduct(product.id))}>
      <CardHeader color="blue" className="relative h-96">
        <img
          src={product.img}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {product.name}
        </Typography>
        <Typography>
          {product.text}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{product.price}$</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
            {product.color && product.color.map((value, index)=>{
                return(
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                    key={index}
                    style={{backgroundColor: value}}
                    />
                )
            })}
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>
    </Link>
    </div>
  )
}

export default ProductCard