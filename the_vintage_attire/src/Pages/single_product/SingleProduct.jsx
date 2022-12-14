import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import StarRatingComponent from "react-star-rating-component";
import ReactImageMagnify from 'react-image-magnify';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

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
  const persetOff = Math.round(
    ((product.price - product.discounted_price) / product.price) * 100
  );
  return (
    <VStack alignItems="left" px={{ base: 1, md: 100 }}>
      <Box border="1px solid red">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">mens</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">pajama</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex
        border="1px solid red"
        direction={{ base: "column", md: "row" }}
        gap="10"
      >
        <Box flex={1}>
          <Box border="1px solid blue" position='relative' >
          <IconButton
          right={5}
          position='absolute'
              fontSize={45}
              aria-label="Search database"
              onClick={() => setWishList((prev) => !prev)}
              bg
              _hover={{ bg: "none" }}
              icon={wishList ? <AiFillHeart /> : <CiHeart />}
            />
                    {/* <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            src: "https://www.jcrew.com/s7-img-facade/G8576_DM2238?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            isFluidWidth: true,
                        },
                        largeImage: {
                            src: "https://www.jcrew.com/s7-img-facade/G8576_DM2238?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            width: 1200,
                            height: 1800
                        },
                        // isHintEnabled: true,
                        shouldUsePositiveSpaceLens: true
                    }} /> */}
            <Image
              boxSize="100%"
              _hover={{ boxSize: "105%", overflow: "hidden" }}
              src="https://www.jcrew.com/s7-img-facade/G8576_DM2238?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
            />
          </Box>
        </Box>
        <VStack border="1px solid black" flex={1} align="left" pt="5" px="5">
          <Heading as="h2" size="md">
            {product.name}
          </Heading>
          <Box>
            <StarRatingComponent
              // name="rate2"
              // editing={false}
              renderStarIcon={() => <Icon as={AiFillStar} />}
              starCount={5}
              value={2}
            />
          </Box>
          <Stack direction={{ base: "column", md: "row" }}>
            <Box as="s">IND {product.price}</Box>
            <Box color="red">
              IND {product.discounted_price} ({persetOff}% Off)
            </Box>
          </Stack>
          <VStack alignItems="left">
            <HStack>
              <Box>
                <span style={{ color: "gray" }}>size:</span>
              </Box>
              <Spacer />
              <Box>
                <span style={{ color: "gray" }}>Size Chart</span>
              </Box>
            </HStack>
            <Box>All sizes are US sizes.</Box>
            <SimpleGrid columns={{ base: 3, md: 4 }} spacing={2} pb={10}>
              {product?.size?.map((item) => (
                <Button
                  key={item}
                  variant="outline"
                  borderColor="1px solid black"
                  borderRadius="none"
                >
                  {item}
                </Button>
              ))}
            </SimpleGrid>
            <HStack pb={10}>
              <Text style={{ color: "gray" }}>Quantity:</Text>
              <Select
                w={20}
                p="none"
                outline="1px solid black"
                borderRadius="none"
              >
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
              >
                ADD TO CARD
              </Button>
              <Button
                size="md"
                height="48px"
                variant="outline"
                borderColor="1px solid black"
                borderRadius="none"
                onClick={() => setWishList((prev) => !prev)}
              >
                {wishList ? (
                  <Icon boxSize={12} as={AiFillHeart} />
                ) : (
                  <Icon boxSize={12} as={CiHeart} />
                )}
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default SingleProduct;
