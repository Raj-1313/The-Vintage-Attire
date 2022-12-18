import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addToCartData } from "../../Redux/cartReducer/Cart.action";
// import StarRatingComponent from "react-star-rating-component";

const ProductDetailBox = (props) => {
  const dispatch = useDispatch();
  const userEmail = useSelector( (store) => store.Auth_reducer?.userDetails?.email );
  const [resize, setSize] = useState("");

  const {
    price,
    discounted_price,
    size = ["X-Small", "Small", "Mediun", "Large", "X-Large", "XX-Large"],
    name,
    description,
    _id,
    handleChangeWishList,
    wishList,
  } = props;
  const persetOff = Math.round(((price - discounted_price) / price) * 100);
  return (
    <VStack
      // border="1px solid black"
      flex="1"
      align="left"
      pt="5"
      px="5"
    >
      <Heading as="h2" size="md">
        {name}
      </Heading>
      <Box>
        {/* <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => <Icon as={AiFillStar} />}
          starCount={5}
          value={2}
        /> */}
      </Box>
      <Stack direction={{ base: "column", md: "row" }}>
        <Box as="s">INR {price}</Box>
        <Box color="red">
          INR {discounted_price} ({persetOff}% Off)
        </Box>
      </Stack>
      <VStack alignItems="left">
        <HStack>
          <Box>
            <span style={{ color: "gray" }}>size: {resize}</span>
          </Box>
          <Spacer />
          <Box>
            <span style={{ color: "gray" }}>Size Chart</span>
          </Box>
        </HStack>
        <Box>All sizes are US sizes.</Box>
        <SimpleGrid columns={{ base: 3, md: 4 }} spacing={2} pb={10}>
          {size?.map((item) => (
            <Button
              key={item}
              variant="outline"
              borderColor="1px solid black"
              borderRadius="none"
              value={item}
              onClick={({ target }) => setSize(target.value)}
            >
              {item}
            </Button>
          ))}
        </SimpleGrid>
        <HStack pb={10}>
          <Text style={{ color: "gray" }}>Quantity:</Text>
          <Select w={20} p="none" outline="1px solid black" borderRadius="none">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </Select>
        </HStack>
        <HStack gap={10}>
          <Button
            _hover="none"
            size="md"
            height="48px"
            width="200px"
            borderRadius="none"
            bgColor="black"
            color="white"
            onClick={() => dispatch(addToCartData(_id,userEmail))}
          >
            ADD TO CARD
          </Button>
          <Button
            size="md"
            height="48px"
            variant="outline"
            borderColor="1px solid black"
            borderRadius="none"
            onClick={handleChangeWishList}
          >
            {wishList ? (
              <Icon boxSize={12} as={AiFillHeart} />
            ) : (
              <Icon boxSize={12} as={CiHeart} />
            )}
          </Button>
        </HStack>
        <Box py={10}>
          <Divider border={1} />
        </Box>
        <Box
        // border="1px solid red"
        >
          <Heading as="h2" size="md">
            Product details.
          </Heading>
          <Text>{description}</Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default ProductDetailBox;
