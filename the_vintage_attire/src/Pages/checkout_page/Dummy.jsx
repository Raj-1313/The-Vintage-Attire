import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BannerAd from "../../Components/BannerAd";
import ProductImageBox from "../single_product/ProductImageBox";

const Dummy = () => {
  const [wishList, setWishList] = useState(false);

  const handleChangeWishList = () => {
    setWishList((prev) => !prev);
  };
  const qty = null;
  return (
    <Box>
      <BannerAd />
      <Box border="1px solid red">
        <Stack border="1px solid blue" justifyContent="center">
          <VStack>
            <HStack>
              <Heading as="h1" fontSize="md">
                SHOPPING BAGS ({qty || 0})
              </Heading>
              <Text>
                Have an account? <Link to="#">Sign In</Link>
              </Text>
            </HStack>
            <HStack as="samp">
              <Text>ITEM</Text>
              <Text>QTY</Text>
              <Text>PRICE</Text>
            </HStack>
            <HStack>
              <HStack>
                <ProductImageBox
                  image={`https://www.jcrew.com/s7-img-facade/G8576_DM2238?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540`}
                  handleChangeWishList={handleChangeWishList}
                  wishList={wishList}
                />
              </HStack>
              <HStack></HStack>
              <HStack></HStack>
            </HStack>
          </VStack>
          <VStack></VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Dummy;
