import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BannerAd from "../../Components/BannerAd";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { getCartData } from "../../Redux/cartReducer/Cart.action";
import { BiArrowBack } from "react-icons/bi";

// const getCartData = async (data) => {
//   let res = await axios.get(`https://vintage-attire-deploy.onrender.com/cart`, {
//     headers: data,
//   });
//   return res.data;
// };

// const initialData={
//   cartLength:0,
//   subTotalAmt:0
// }

const Cart = () => {

  const dispatch = useDispatch()

  const { cartData,cartLength,subTotalAmt,isLoading, isError } = useSelector((store) => {return store.CartReducer}, shallowEqual);
  
  const userEmail = useSelector(
    (store) => store.Auth_reducer?.userDetails?.email
  );

  
  useEffect(() => {
    dispatch(getCartData(userEmail))
  }, [dispatch, cartLength]);

  // useEffect(() => {
  //   const cartLength = cartData.length;
  //   setTotalCartItems(cartLength);
  //   const subTotal = cartData?.reduce((total, item) => {
  //     total += item.count * item.data[0].price;
  //     return total;
  //   }, 0);
  //   setSubTotal(subTotal);
  // }, [cartData, cartData.length]);

  return (
    <>
      <Navbar />
      <BannerAd />
      <Box
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mt={20}
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
            sm: "row",
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
              SHOPPING BAG ({cartLength} ITEMS)
            </Heading>

            <Stack bg="white" spacing="6">
              {cartData?.map((item, i) => {
                return <CartItem key={item.data[0]._id} userEmail={userEmail} {...item} />;
              }, 0)}
            </Stack>
          </Stack>

         {cartLength>0? <Flex direction="column" align="center" flex="1">
            <CartOrderSummary subTotal={subTotalAmt} />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link as={ReactLink} to="/" color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>: <Link as={ReactLink} to="/"><BiArrowBack /> </Link>}
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
