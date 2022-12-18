import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import "./ProductCard.scss";
const ProductCard = ({ productData }) => {
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
            className="hover-btn"
          >
            Add to Cart
          </Button>
        </Box>
      </div>

      <Box flexDirection={"column"} className="product-details">
        <Text fontSize={"md"}>{productData.name}</Text>
        <Text fontSize={"sm"} textDecoration={"line-through"}>
          INR {productData.discounted_price}
        </Text>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          INR {productData.price}
        </Text>
      </Box>
    </div>
  );
};

export default ProductCard;
