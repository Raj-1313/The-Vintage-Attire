import { Box,Text,Flex,Grid,Button,Image,Link } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

const WomenProductPage = () => {
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
    >
      <Image
        zIndex={"0"}
        src={
          "https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img0.jpg"
        }
        h="full"
        w="full"
        onClick={()=>navigate("/product/womenpage")}
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
        onClick={()=>navigate("/product/womenpage")}

      >
        <Text fontSize={{ base: "2rem", md: "3.8rem" }} color='red'>
         The Holiday Collection is Here!
         
         
        </Text>
        <Text fontSize={{ base: "1rem", md: "2rem" }} color='red'>No one does festive like we do</Text>
        <Link textDecoration={'underline'} fontSize='md' onClick={()=>navigate("/product/menspage")}>Shop the latest</Link>
      </Box>
    </Box>
        
    <Box onClick={()=>navigate("/product/womenpage")} w='90%' m='auto' mb='3rem' cursor={'pointer'}>
        <Text
          textDecoration={"underline"}
          fontFamily="sans"
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          textAlign='center'
          fontWeight={'normal'}
          mt='2rem'
        >
          Shops, stories & more
        </Text>
        <Grid
          templateColumns={{ sm: "repeat(1,1fr  )", md: "repeat(4,1fr)" }}
          gap="10"
          mt="2rem"
        >
          <Box display={"flex"} flexDirection="column">
            <Image src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img0.jpg" />
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
            <Image src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img1_new.jpg" />
            <Text
              fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
              fontFamily="sans"
            >
              The Sun Shop
            </Text>
            <Link fontSize={"14px"} textDecoration="underline">
              Shop the festive roundup
            </Link>
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Image src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img2.jpg" />
            <Text
              fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
              fontFamily="sans"
            >
              Festive pj sets
            </Text>
            <Link fontSize={"14px"} textDecoration="underline">
              Shop her December edit
            </Link>
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Image src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img3.jpg" />
            <Text
              fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
              fontFamily="sans"
            >
              
New sweaters, new gifts
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

export default WomenProductPage