import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";

import RazorPay from '../payment/RazorPay'

// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const initialData = {
  f_name:"",
  l_name:"",
  address1:"",
  address2:"",
  pin_code:"",
  city:"",
  email:"",
  mobile:""
}

export default function CheckoutPage() {
  const { subTotalAmt } = useSelector((store) => {return store.CartReducer}, shallowEqual);
  const [deliveryData, setDeliveryData] = useState(initialData)
  const {userDetails} = useSelector(store =>store.Auth_reducer)
  console.log(userDetails)
  console.log(deliveryData)

  useEffect(() =>{
    const { name, email, mobile } = userDetails
        setDeliveryData({...deliveryData,f_name:name,email:email,mobile:mobile})
  },[])

  const handleChange = (e) =>{
      const { value,name } = e.target
      setDeliveryData({...deliveryData,[name]:value})
  }

  return (
    <Flex
      align={"center"}
      justify={"center"}
      
    >
      <Stack spacing={8} mx={"auto"} maxW={{base:"md",md:"xl"}} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Delivery Address
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={10}
        >
          <Stack spacing={4}>
            <Stack direction={{base:"column",md:"row"}}>
              <Box>
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" value={deliveryData.f_name} name="f_name" onChange={handleChange}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={deliveryData.l_name} name="l_name" onChange={handleChange}/>
                </FormControl>
              </Box>
            </Stack>
            <FormControl isRequired>
              <FormLabel>Address Line 1</FormLabel>
              <Input type="text" value={deliveryData.address1} name="address1" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Address Line 2</FormLabel>
              <Input type="text" value={deliveryData.address2} name="address2" onChange={handleChange}/>
            </FormControl>
            <Stack direction={{base:"column",md:"row"}}>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Posta Code</FormLabel>
                  <Input type="text" value={deliveryData.pin_code} name="pin_code" onChange={handleChange}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>City</FormLabel>
                  <Input type="text" value={deliveryData.city} name="city" onChange={handleChange}/>
                </FormControl>
              </Box>
            </Stack>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={deliveryData.email} name="email" onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input type="tel" value={deliveryData.mobile} name="mobile" onChange={handleChange} />
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
               <RazorPay details={deliveryData} totalprice={subTotalAmt} />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
