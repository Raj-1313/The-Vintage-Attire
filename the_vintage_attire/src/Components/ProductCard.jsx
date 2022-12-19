
import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Link,
  useLocation,
} from "react-router-dom";
import { addToCartData } from "../Redux/cartReducer/Cart.action";
import "./ProductCard.scss";
const ProductCard = ({ productData }) => {

  const toast = useToast()
  const dispatch = useDispatch();
  const userEmail = useSelector( (store) => store.Auth_reducer?.userDetails?.email );
  const [hoverBtn, setHoverBtn] = useState(false);

  const location = useLocation();

  return (
    <div key={productData.id} className="product-container">
      <div className="product-box">
        <Box position={"relative"}>
          <Link
            to={`/product/${productData._id}`}
            state={{
              data: `${location.pathname}/${productData.type}/${productData._id}/`,
            }}
          >
            <img src={productData.imgUrl} className="product-image" />
          </Link>
          <Button
            display="none"
            // colorScheme={'black'}
            bg='black'
            borderRadius={'none'}
            _hover={{colorScheme:"blackAlpha"}}
           
            color='white'
            position={"absolute"}
            bottom="0"
            left="0"
            w="full"
            onClick={() => dispatch(addToCartData(productData._id,userEmail)).then(res =>{
              toast({
                title: 'This item Added to your cart.',
                status: 'info',
                duration: 5000,
                position:"top",
                isClosable: true,
              })
            })}
            className="hover-btn"
          >
            Add to Cart
          </Button>
        </Box>
      </div>

      <Box flexDirection={"column"} className="product-details">
        <Text fontSize={"md"}>{productData.name}</Text>
        <Text color='red' fontSize={"sm"} textDecoration={"line-through"}>
          INR {productData.discounted_price || Math.floor(Math.random()*17000) }
        </Text>
        <Text  fontSize={"sm"} fontWeight={"bold"}>
          INR {productData.price || Math.floor(Math.random()*17000)}
        </Text>
      </Box>
    </div>
  );
};

export default ProductCard;
