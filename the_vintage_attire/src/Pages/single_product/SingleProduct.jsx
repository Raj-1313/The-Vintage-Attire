import React, { useState } from "react";
import { Box, Center, Stack, VStack } from "@chakra-ui/react";
import BreadCrumb from "./BreadCrumb";
import ProductImageBox from "./ProductImageBox";
import ProductDetailBox from "./ProductDetailBox";
import BannerAd from "../../Components/BannerAd";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useLocation, useParams } from "react-router-dom";

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
  const location = useLocation()
  const { id } =useParams
  console.log("id",id)
  const [wishList, setWishList] = useState(false);

  const handleChangeWishList = () => {
    setWishList((prev) => !prev);
  };

  return (
    <Box>
      <Navbar />
      <BannerAd />
      <Center>
      <VStack alignItems="left" mt={20}
       maxW={{
        base: "3xl",
        lg: "7xl",
      }}
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
        <BreadCrumb
          home={{ name: "home", path: "#" }}
          category1={{ name: "mens", path: "#" }}
          category2={{ name: "pajama", path: "#" }}
        />
        <Stack
          direction={{
            base: "column",
            md: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
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
        </Stack>
      </VStack>
      </Center>
      <Footer />
    </Box>
  );
};

export default SingleProduct;
