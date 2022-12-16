import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";

export const cartData = [
    {
      id: '1',
      price: 150,
      currency: 'INR',
      name: 'Ferragamo bag',
      description: 'Tan, 40mm',
      quantity: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: '2',
      price: 150,
      currency: 'INR',
      name: 'Bamboo Tan',
      description: 'Tan, 40mm',
      quantity: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: '3',
      price: 150,
      currency: 'INR',
      name: 'Yeezy Sneakers',
      description: 'Tan, 40mm',
      quantity: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
    },
  ]



const getCartData = (data) =>{
  return axios.get(`https://vintage-attire-deploy.onrender.com/cart`,data)
              .then(res =>res)
              .catch(err =>{
                console.log(err);
              })
}

const Cart = () => {
  const [cartD,setCartData] = useState( cartData||[])
  const dispatch = useDispatch()
  const userEmail = useSelector(store =>store.auth.token.User.email)
  console.log("cart",userEmail)

  useEffect(() =>{
    getCartData({userEmail}).then(res =>{
      console.log("cartData",res)
    })
  })

  return (
    <Box
    maxW={{
      base: "3xl",
      lg: "7xl",
    }}
    mx="auto"
    px={{
      base: "4",
      md: "8",
      lg: "12",
    }}
    py={{
      base: "6",
      md: "8",
      lg: "12",
    }}
  >
    <Stack
      direction={{
        base: "column",
        lg: "row",
      }}
      align={{
        lg: "flex-start",
      }}
      spacing={{
        base: "8",
        md: "16",
      }}
    >
      <Stack
        spacing={{
          base: "8",
          md: "10",
        }}
        flex="2"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          SHOPPING BAG (3 ITEMS)
        </Heading>

        <Stack bg='white'  spacing="6">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color={mode("blue.500", "blue.200")}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
  )
}

export default Cart
 
    
 

