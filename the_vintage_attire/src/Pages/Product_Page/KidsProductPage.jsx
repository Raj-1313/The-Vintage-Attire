
import { Box,Text,Flex,Grid,Button,Image,Link } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

const KidsProductPage = () => {
    const navigate = useNavigate()
  return (
    <>
    <Navbar />
    <Box position="absolute" mt={"4rem"} w={"100%"}>
    <Flex
      w={"full"}
      h="4rem"
      alignItems={"center"}
      justifyContent={"center"}
      fontSize=".85rem"
      fontWeight={"500"}
    >
      Have a question? We can help.*
    </Flex>
    <Box
      w="full"
      h={{ base: "70vh", sm: "80vh", md: "100vh", lg: "110vh" }}
      position="relative"
      cursor={'pointer'}
      onClick={()=>navigate("/product/kidspage")}
    >
      <Image
        zIndex={"0"}
        src={
          "https://www.jcrew.com/brand_creative/homepage2022/13-Gift/2022gifcyb_1122_cc_lp_img0.jpg"
        }
        h="full"
        w="full"
        onClick={()=>navigate("/product/kidspage")}
        cursor='pointer'
      />
       <Box
            zIndex={"1"}
            w="full"
            color={"white"}
            position="absolute"
            top={{ base: "10%", sm: "25%", md: "35%" }}
            left="0"
            textAlign={"center"}
            fontWeight={"normal"}
            fontFamily={"serif"}
          >
            <Text fontSize={{ base: "2rem", md: "4.5rem" }}>
              new arrivals,
            </Text>
            <Text fontSize={{  base: "2rem", md: "4.5rem"}}>
              new gifts!
            </Text>
            <Flex
              mt={{ base: "1rem", md: "2rem" }}
              justifyContent={{base:"space-evenly",lg:"space-between"}}
              flexWrap={{ base: "wrap", md: "wrap" }}
              ml="auto"
              mr="auto"
              w={{ base: "full", lg: "35%" }}
              cursor={"pointer"}
            >
              <Button
                borderRadius={"none"}
                color="black"
                w={{ base: "6rem", sm: "8rem", md: "12rem" }}
                p="1rem"
                mt="8px"
                fontSize={{ base: "10px", sm: "14px", md: "sm" }}
                fontWeight={"500"}
                fontFamily="sans-serif"
              >
                shop girls
              </Button>
              <Button
                borderRadius={"none"}
                color="black"
                w={{ base: "6rem", sm: "8rem", md: "12rem" }}
                p="1rem"
                mt="8px"
                fontSize={{ base: "10px", sm: "14px", md: "sm" }}
                fontWeight={"500"}
                fontFamily="sans-serif"
              >
                shop boys
              </Button>
             
            </Flex>
          </Box>  
    </Box>
    <Box w='90%' m='auto' mb='3rem'>
        <Text
          textDecoration={"underline"}
          fontFamily="sans"
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          textAlign='center'
          fontWeight={'normal'}
          mt='2rem'
          onClick={()=>navigate("/product/kidspage")}
          cursor='pointer'
        >
          Shops, stories & more
        </Text>
        <Grid
          templateColumns={{ sm: "repeat(1,1fr  )", md: "repeat(4,1fr)" }}
          gap="10"
          mt="2rem"
        >
          <Box display={"flex"} flexDirection="column">
            <Image src="https://www.jcrew.com/brand_creative/2022/202213-Gift/flyout/2022gifcyb_1122_flyouts_cc_img0.jpg" />
            <Text
              fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
              fontFamily="sans"
            >
                           The Ski Shop


            </Text>
            <Link fontSize={"14px"} textDecoration="underline">
              Get a closer look
            </Link>
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Image src="https://www.jcrew.com/brand_creative/2022/202213-Gift/flyout/2022gifcyb_1122_flyouts_cc_img3.jpg" />
            <Text
              fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
              fontFamily="sans"
            >
             

the gift guide
            </Text>
            <Link fontSize={"14px"} textDecoration="underline">
              Shop the festive roundup
            </Link>
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Image src="https://www.jcrew.com/brand_creative/2022/202213-Gift/flyout/2022gifcyb_1122_flyouts_cc_img1.jpg" />
            <Text
              fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
              fontFamily="sans"
            >
              mix-and-match pj’s
            </Text>
            <Link fontSize={"14px"} textDecoration="underline">
              Shop her December edit
            </Link>
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Image src="https://www.jcrew.com/brand_creative/2022/202213-Gift/flyout/2022gifcyb_1122_flyouts_cc_img2.jpg" />
            <Text
              fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
              fontFamily="sans"
            >
              

              color coated
            </Text>
            <Link fontSize={"14px"} textDecoration="underline">
              Shop the video
            </Link>
          </Box>
        </Grid>
      </Box>
      <Footer/>
</Box>

        
</>
  )
}

export default KidsProductPage