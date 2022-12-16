import React, { useState } from "react";
import { Box, Center, Flex, Grid, VStack } from "@chakra-ui/react";
import BreadCrumb from "./BreadCrumb";
import ProductImageBox from "./ProductImageBox";
import ProductDetailBox from "./ProductDetailBox";
import BannerAd from "../../Components/BannerAd";

const product = {
  imgUrl:
    "https://www.jcrew.com/s7-img-facade/G8576_DM2238?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
  name: "Girls' runaround jean in denim wash",
  description:
    "Our new stretchy pull-on jeans are comfy like leggings (thanks to the soft, terry-like inside)",
  discounted_price: "1405",
  price: "1620",
  type: "clothing",
  category: "kids",
  id: "37",
  size: ["X-Small", "Small", "Mediun", "Large", "X-Large", "XX-Large"],
};

const SingleProduct = () => {
  const [wishList, setWishList] = useState(false);

  const handleChangeWishList = () => {
    setWishList((prev) => !prev);
  };

  return (
    <Box>
      <BannerAd />
      <Center>
      <VStack alignItems="left" mt={5} maxWidth={1100}>
        <BreadCrumb
          home={{ name: "home", path: "#" }}
          category1={{ name: "mens", path: "#" }}
          category2={{ name: "pajama", path: "#" }}
        />
        <Grid
          gridTemplateColumns={{base:"1fr",md:"2fr 1fr"}}
          border="1px solid yellow"
          // direction={{ base: "column", md: "row" }}
          gap="10"
        >
          <ProductImageBox
            image={product.imgUrl}
            handleChangeWishList={handleChangeWishList}
            wishList={wishList}
          />
          <ProductDetailBox
            {...product}
            handleChangeWishList={handleChangeWishList}
            wishList={wishList}
          />
        </Grid>
      </VStack>
      </Center>
    </Box>
  );
};

export default SingleProduct;
