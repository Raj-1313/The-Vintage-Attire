import { Box, Button, Flex, Grid, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FilterMenComponent from '../../Components/FilterComponents/FilterMenComponent'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

const MenProductPage = () => {
const navigate = useNavigate();
  return (
    <>
        <Navbar/>
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
        >
          <Image
            zIndex={"0"}
            src={
              "https://www.jcrew.com/brand_creative/homepage2022/13-Gift/2022gifcyb_1122_hp_m_img0.jpg"
            }
            h="full"
            w="full"
            onClick={()=>navigate("/product/menspage")}
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
            <Text fontSize={{ base: "2rem", md: "3.8rem" }}>
              New Arrivals,
              <br />
              New Gifts
            </Text>
            <Link textDecoration={'underline'} fontSize='md' onClick={()=>navigate("/product/menspage")}>Shop the latest</Link>
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
            >
              Shops, stories & more
            </Text>
            <Grid
              templateColumns={{ sm: "repeat(1,1fr  )", md: "repeat(4,1fr)" }}
              gap="10"
              mt="2rem"
            >
              <Box display={"flex"} flexDirection="column">
                <Image src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img0.jpg" />
                <Text
                  fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
                  fontFamily="sans"
                >
                  Most wanted: limited-edition Barbour® X J.Crew Agnetha jacket
                </Text>
                <Link fontSize={"14px"} textDecoration="underline">
                  Get a closer look
                </Link>
              </Box>
              <Box display={"flex"} flexDirection="column">
                <Image src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img1.jpg" />
                <Text
                  fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
                  fontFamily="sans"
                >
                  The edit: tartan time
                </Text>
                <Link fontSize={"14px"} textDecoration="underline">
                  Shop the festive roundup
                </Link>
              </Box>
              <Box display={"flex"} flexDirection="column">
                <Image src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img2.jpg" />
                <Text
                  fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
                  fontFamily="sans"
                >
                  Olympia’s picks
                </Text>
                <Link fontSize={"14px"} textDecoration="underline">
                  Shop her December edit
                </Link>
              </Box>
              <Box display={"flex"} flexDirection="column">
                <Image src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img3.jpg" />
                <Text
                  fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem" }}
                  fontFamily="sans"
                >
                  Design Try-ons: the Holiday Collection
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

export default MenProductPage