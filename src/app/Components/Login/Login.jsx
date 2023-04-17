import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
import { useState } from "react";
import { login } from "../../../features/Slices/authSlice";
import { useDispatch } from "react-redux";


const Login = () => {
    const initialState = {
        name:"",
        password:"",
        image:""
    }
    const dispatch = useDispatch()
    const [values, setValues] = useState()

    const onChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }
  return (
    <div className="loginContiner grid grid-cols-1 items-center justify-items-center h-screen">
        <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Name" size="lg" type="text" name="name" value={values?.name} onChange={onChange}/>
        <Input label="Password" size="lg" type="password" name="password" value={values?.password} onChange={onChange}/>
        <Input label="Image URL Address" size="lg" type="text" name="image" value={values?.image} onChange={onChange}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={()=> dispatch(login(values))}>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Image is Optional
        </Typography>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login