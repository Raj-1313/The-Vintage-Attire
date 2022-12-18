import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'

const ProductCard = ({productData}) => {

    const location = useLocation();


  return (
    <Box key={productData.id} >
    <Box overflow='hidden' >
        <Link to={`/product/${productData._id}`} state={{data:`${location.pathname}/${productData.type}/${productData._id}/`}}>
    <Image src={productData.imgUrl} _hover={{ transform: "scale(1.15)", transformOrigin: "50% 50%" }}
    transition="transform .5s"/>
        </Link>
    </Box>

    <Flex flexDirection={'column'} >
        <Text fontSize={'md'}>{productData.name}</Text>
        <Text fontSize={'sm'} textDecoration={'line-through'}>INR {productData.discounted_price}</Text>
        <Text fontSize={'sm'} fontWeight={"bold"}>INR {productData.price}</Text>
    </Flex>
</Box>
  )
}

export default ProductCard