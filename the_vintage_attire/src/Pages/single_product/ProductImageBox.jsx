import { Box, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { CiHeart } from 'react-icons/ci'

const ProductImageBox = ({ image,handleChangeWishList,wishList}) => {
   
  return (
    <Box
    flex='2'
    border="1px solid blue"
    position="relative"
    // _hover={{ transform: "scale(1.05)", transformOrigin: "50% 50%" }}
    // transition="transform .5s"
  >
    <IconButton
      right={5}
      position="absolute"
      fontSize={45}
      aria-label="Search database"
      onClick={handleChangeWishList}
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
      src={image}
    />
  </Box>
  )
}

export default ProductImageBox