import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/Slices/cartSlice";

const ProductSectionItem = ({product}) => {
    const dispatch = useDispatch()
    const defaultSize = product.size[0]
    const defaultColor = product.color[0]
    return (
    <div className="productSectionItemContainer">
        <Card className="w-96">
      <CardHeader floated={false} className="h-96">
        <img src={product.img} alt={product.name} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {product.name}
        </Typography>
        <Typography color="gray" className="font-medium" textGradient>
          {product.text}
        </Typography>
        <div className="flex justify-between items-cnter pt-4">
        <Typography color="gray" className="font-medium" textGradient>
          Size left: {defaultSize}
        </Typography>
        <Typography color="gray" className="font-medium" textGradient>
          Color: <span className="px-2 rounded-full ml-2" style={{backgroundColor: defaultColor}}>{defaultColor}</span>
        </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Add to Cart" placement="bottom">
          <Button onClick={()=> dispatch(addToCart({
            id: product.id,
            name:product.name,
            img:product.img,
            text:product.text,
            size: defaultSize,
            color: defaultColor,
            price: product.price,
            amount: 1,
            totalPrice: product.price
          }))}
            className="hover:bg-green-400 hover:text-white" color="gray" variant="outlined" ripple={true} 
            > Add to Cart </Button>
        </Tooltip>
      </CardFooter>
    </Card>
    </div>
  )
}

export default ProductSectionItem