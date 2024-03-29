import india from "../../Components/Footer/india.png";

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/Login";
import Navbar from "../../Components/Navbar/Navbar";
import V from "../../Components/Navbar/V.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* <Login></Login> */}
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
        {/* Welcome Page or Continue to shopping */}
        {loader && (
          <Box
            display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
            left={"31%"}
            objectFit="contain"
            flexDirection="column"
            h="100vh"
            bg={"white"}
            alignItems="center"
            position={"absolute"}
            w="40%"
            border="1px solid black"
            m="auto"
            zIndex={"20"}
            top="-3.75rem"
          >
            <Box
              display={"flex"}
              mt="2rem"
              h="2rem"
              w="13%"
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Image src={india} h="50%" />
              <Text fontSize={"sm"}>INDIA</Text>
            </Box>
            <Text
              fontSize={"lg"}
              fontWeight="light"
              // mt="3%"
              // m='2% 0'
              textTransform="uppercase"
            >
              The Vintage Attire.com Ships All
            </Text>
            <Text
              fontSize={{ md: "2rem", lg: "2rem", xl: "3rem" }}
              fontWeight="500"
              // mt="1%"
              textDecoration={"underline"}
              textDecorationThickness={"3px"}
            >
              Around The World
            </Text>
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent={"space-evenly"}
              // mt="4%"
              // m='3% 0'
              alignItems="center"
            >
              <Text fontWeight={"semibold"} mt="1rem">
                FLAT RATE SHIPPING
              </Text>
              <Text m='2% 0' fontWeight={"semibold"}>DUTY-FREE SHOPPING IN YOUR</Text>
              <Text m='2% 0' fontWeight={"semibold"}>LOCAL CURRENCY</Text>
              <Text m='2% 0' fontWeight={"semibold"}>NEED HELP?</Text>
              <Text m='2% 0'>email julie@jcrew.com or</Text>
              <Text m='2% 0'>call 1-434-385-5775</Text>
              <Button
                bg="black"
                color="white"
                w="14rem"
                onClick={() => setLoader(false)}
                borderRadius="none"
                mt="3%"
                _hover={"none"}
              >
                START SHOPPING
              </Button>
              <Link
                textDecoration={"underline"}
                mt='10%'
                textAlign={"justify"}
                fontSize="md"
                letterSpacing={"3px"}
              >
                Take me to the U.S. site.
              </Link>
              <Box position={'absolute'} bottom='0' w="full" bg="lightgray" p="1rem" objectFit={"contain"}>
                <Text
                  fontSize={".65rem"}
                  textAlign="center"
                  fontWeight={"semibold"}
                >
                  By clicking "start shopping," you agree to ourTerms of Use and
                  Privacy Policy, including the use ofcookiesand the transfer of
                  your personal information to the United States, a jurisdiction
                  that may not provide an equivalent level of data protection to
                  the laws in your home country.
                </Text>
              </Box>
            </Box>
          </Box>
        )}
        <Box
          w="full"
          h={{ base: "70vh", sm: "80vh", md: "100vh", lg: "110vh" }}
          position="relative"
          onClick={()=>navigate("/product/men")}
        >
          <Image
            zIndex={"0"}
            src={
              "https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img0.jpg"
            }
            h="full"
            w="full"
            cursor={'pointer'}
          />
          <Box
            zIndex={"1"}
            w="full"
            color={"white"}
            position="absolute"
            top={{ base: "10%", sm: "25%", md: "32%" }}
            left="0"
            textAlign={"center"}
            fontWeight={"normal"}
            fontFamily={"serif"}
            cursor='pointer'
          >
            <Text fontSize={{ base: "2rem", md: "4.5rem" }}>
              The J.Crew Gift Guide
            </Text>
            <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
              Great holidays presents are our parts of heritage. Here's our 2022
              take...{" "}
            </Text>
            <Flex
              mt={{ base: "1rem", md: "2rem" }}
              justifyContent={"space-evenly"}
              flexWrap={{ base: "wrap", md: "wrap" }}
              ml="auto"
              mr="auto"
              w={{ base: "full", md: "90%" }}
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
                onClick={()=>navigate("/product/women")}
              >
                Shop for her
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
                onClick={()=>navigate("/product/men")}
              >
                Shop for him
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
                onClick={()=>navigate("/product/kids")}
              >
                Shop for girls
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
                onClick={()=>navigate("/product/kids")}
              >
                Shop for boys
              </Button>
              <Button
                borderRadius={"none"}
                color="black"
                w={{ base: "6rem", sm: "8rem", md: "12rem" }}
                p="1rem"
                mt="8px"
                fontSize={{ base: "10px", sm: "14px", md: "sm" }}
                fontWeight={"500"}
                onClick={()=>navigate("/product/home")}
                fontFamily="sans-serif"
              >
                Shop for the home
              </Button>
            </Flex>
          </Box>
        </Box>

        <Grid
          templateColumns={{ md: "repeat(1,1fr)", lg: "repeat(2, 1fr)" }}
          w="88%"
          ml="auto"
          mr="auto"
          mt="2.5rem"
          bg="white"
          onClick={()=>navigate("/product/women")}
        >
          <Box position={"relative"}>
            <Image
              zIndex={"0"}
              cursor={"pointer"}
              src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img1_new.jpg"
            />
            <Box
              zIndex={"1"}
              w="full"
              color={"white"}
              position="absolute"
              top={{ base: "15%", sm: "40%", md: "60%" }}
              left="0"
              textAlign={"center"}
              fontWeight={"normal"}
              fontFamily={"serif"}
            >
              <Text fontSize={"2.5rem"}>Going Somewhere snowy?</Text>
              <Link
                fontSize={"1rem"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
              >
                Visit the Ski Shop
              </Link>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Image
              zIndex={"0"}
              cursor={"pointer"}
              src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img2_new.jpg"
            />
            <Box
              zIndex={"1"}
              w="full"
              color={"white"}
              position="absolute"
              top={{ base: "15%", sm: "40%", md: "60%" }}
              left="0"
              textAlign={"center"}
              fontWeight={"normal"}
              fontFamily={"serif"}
            >
              <Text fontSize={"2.5rem"}>Going Somewhere Beachy?</Text>
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
              >
                Visit the sun Shop
              </Link>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Image
              zIndex={"0"}
              cursor={"pointer"}
              src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img3.jpg"
            />
            <Box
              zIndex={"1"}
              w="full"
              color={"white"}
              position="absolute"
              top={{ base: "15%", sm: "40%", md: "60%" }}
              left="0"
              textAlign={"center"}
              fontWeight={"normal"}
              fontFamily={"serif"}
            >
              <Text fontSize={"2.5rem"}>Fact:Sweaters make great gifts </Text>
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
              >
                One for them, one for you
              </Link>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Image
              zIndex={"0"}
              cursor={"pointer"}
              src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img4.jpg"
            />
            <Box
              zIndex={"1"}
              w="full"
              color={"white"}
              position="absolute"
              top={{ base: "15%", sm: "40%", md: "60%" }}
              left="0"
              textAlign={"center"}
              fontWeight={"normal"}
              fontFamily={"serif"}
            >
              <Text fontSize={"2.5rem"}>Not-so-snooze-worthy-pj's</Text>

              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
              >
                Shop our holiday prints
              </Link>
              <br />
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
              >
                Shop pj's for the whole fontFamily
              </Link>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Image
              zIndex={"0"}
              cursor={"pointer"}
              src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img5.jpg"
            />
            <Box
              zIndex={"1"}
              w="full"
              color={"white"}
              position="absolute"
              top={{ base: "15%", sm: "40%", md: "60%" }}
              left="0"
              textAlign={"center"}
              fontWeight={"normal"}
              fontFamily={"serif"}
            >
              <Text fontSize={"2.5rem"} color="black">
                Our warmest coats
              </Text>
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
                color="black"
              >
                Bundle up
              </Link>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Image
              zIndex={"0"}
              cursor={"pointer"}
              src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img6.jpg"
            />
            <Box
              zIndex={"1"}
              w="full"
              color={"white"}
              position="absolute"
              top={{ base: "15%", sm: "40%", md: "60%" }}
              left="0"
              textAlign={"center"}
              fontWeight={"normal"}
              fontFamily={"serif"}
            >
              <Text fontSize={"2.5rem"}>Your NYE outfit awaits...</Text>
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
              >
                Shop new arrivals
              </Link>
              <br />
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
              >
                Visit the Holiday Party Shop
              </Link>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Image
              zIndex={"0"}
              cursor={"pointer"}
              src="https://www.jcrew.com/brand_creative/homepage2022/13-Gift/2022gifcyb_hp_cc_img0a.jpg"
            />
            <Box
              zIndex={"1"}
              w="full"
              color={"white"}
              position="absolute"
              top={{ base: "15%", sm: "40%", md: "60%" }}
              left="0"
              textAlign={"center"}
              fontWeight={"normal"}
              fontFamily={"serif"}
            >
              <Text fontSize={"2.5rem"}>New arrivals, new Gifts!</Text>
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
                onClick={()=>navigate("/product/kids")}
              >
                Shop girls
              </Link>
              <br />
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
                onClick={()=>navigate("/product/kids")}
              >
                Shop boys
              </Link>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Image
              zIndex={"0"}
              cursor={"pointer"}
              src="https://www.jcrew.com/brand_creative/homepage2022/13-Gift/2022gifcyb_hp_cc_img1.jpg"
            />
            <Box
              zIndex={"1"}
              w="full"
              color={"white"}
              position="absolute"
              top={{ base: "15%", sm: "40%", md: "60%" }}
              left="0"
              textAlign={"center"}
              fontWeight={"normal"}
              fontFamily={"serif"}
            >
              <Text fontSize={"2.5rem"} color="gold">
                Mix-and-Match pj's
              </Text>
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
                color="gold"
              >
                Shop boys' pj's
              </Link>
              <br />
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
                color="gold"
              >
                Shop girls' pj's
              </Link>
              <br />
              <Link
                fontSize={"1rem"}
                cursor={"pointer"}
                fontFamily="sans-serif"
                textDecoration={"underline"}
                color="gold"
              >
                Shop for the whole family
              </Link>
            </Box>
          </Box>
        </Grid>
        <Flex
          w={{ base: "95%", lg: "70%" }}
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          margin={"auto"}
          alignItems={"center"}
          justifyContent="space-between"
          mt="2rem"
          mb="4rem"
        >
          <Text fontSize={{ base: "xl", md: "2xl" }} fontFamily="sans">
            Shop New Arrivals
          </Text>
          <Button
            borderRadius={"none"}
            mt={{ base: "8px", md: "none" }}
            cursor={"pointer"}
            bg="white"
            border="1px solid grey"
            w={"8rem"}
            _hover={{ bg: "grey", color: "white" }}
            onClick={()=>navigate("/product/women")}
          >
            Shop Women
          </Button>
          <Button
            borderRadius={"none"}
            mt={{ base: "8px", md: "none" }}
            cursor={"pointer"}
            bg="white"
            border="1px solid grey"
            w={"8rem"}
            _hover={{ bg: "grey", color: "white" }}
            onClick={()=>navigate("/product/men")}
          >
            Shop Men
          </Button>
          <Button
            borderRadius={"none"}
            mt={{ base: "8px", md: "none" }}
            bg="white"
            cursor={"pointer"}
            border="1px solid grey"
            w={"8rem"}
            _hover={{ bg: "grey", color: "white" }}
            onClick={()=>navigate("/product/kids")}
          >
            Shop Girls
          </Button>
          <Button
            borderRadius={"none"}
            mt={{ base: "8px", md: "none" }}
            bg="white"
            cursor={"pointer"}
            border="1px solid grey"
            w={"8rem"}
            _hover={{ bg: "grey", color: "white" }}
            onClick={()=>navigate("/product/kids")}
          >
            Shop Boys
          </Button>
        </Flex>

        <Box
          pl={{ base: "2rem", md: "8rem" }}
          pr={{ base: "2rem", md: "8rem" }}
          pt={{ base: "2rem", md: "4rem" }}
          bg="#F8F4EF"
          pb={{ base: "2rem", md: "4rem" }}
        >
          <Flex
            justifyContent={{ base: "center", md: "space-between" }}
            w="full"
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-end" }}
          >
            <Image src={V} w={{ base: "150px", md: "15%" }} />
            <Link textDecoration={"underline"}>
              Meet our creative community
            </Link>
          </Flex>

          <Grid
            templateColumns={{ sm: "repeat(1,fr)", md: "repeat(3,1fr)" }}
            gap="10"
            mt="2rem"
            mb="4rem"
          >
            <Box display={"flex"} flexDirection={"column"}>
              <Image src="https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_w_img12.jpg" />
              <Text fontSize={{ base: "1rem", md: "1rem" }}>
                Creative Spirits Series
              </Text>
              <Text
                fontSize={{ base: "1.5rem", sm: "2rem", md: "2rem" }}
                fontFamily="sans"
              >
                Marie Marot X J.Crew
              </Text>
              <Link
                fontSize={{ base: "14px", md: "14px" }}
                textDecoration="underline"
                onClick={()=>navigate("/product/women")}
              >
                Shop our collab
              </Link>
            </Box>
            <Box display={"flex"} flexDirection="column">
              <Image src="https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_w_img7.jpg" />
              <Text fontSize={{ base: "1rem", md: "1rem" }}>
                That fall feeling
              </Text>
              <Text
                fontSize={{ base: "1.5rem", sm: "2rem", md: "2rem" }}
                fontFamily="sans"
              >
                Layer love with Marjon Carlos
              </Text>
              <Link
                fontSize={{ base: "14px", md: "14px" }}
                textDecoration="underline"
                onClick={()=>navigate("/product/women")}
              >
                Shop her story
              </Link>
            </Box>
            <Box display={"flex"} flexDirection="column">
              <Image src="https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_w_img8.jpg" />
              <Text fontSize={{ base: "1rem", md: "1rem" }}>
                Heritage made modern
              </Text>
              <Text
                fontSize={{ base: "1.5rem", sm: "2rem", md: "2rem" }}
                fontFamily="sans"
              >
                A Cashmere Remix with Lucy Williams
              </Text>
              <Link
                fontSize={{ base: "14px", md: "14px" }}
                textDecoration="underline"
                onClick={()=>navigate("/product/women")}
              >
                Shop her story
              </Link>
            </Box>
          </Grid>
          <Box>
            <Text
              textDecoration={"underline"}
              fontFamily="sans"
              fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
            >
              More Stories
            </Text>
            <Grid
              templateColumns={{ sm: "repeat(1,1fr  )", md: "repeat(4,1fr)" }}
              gap="10"
              mt="2rem"
              onClick={()=>navigate("/product/kids")}
              cursor='pointer'
            >
              <Box display={"flex"} flexDirection="column">
                <Image src="https://www.jcrew.com/brand_creative/homepage2022/14-Dec3/gifcyb_w_agnetha.jpg" />
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
                <Image src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img9.jpg" />
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
                <Image src="https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_w_img10.jpg" />
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
                <Image src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img11.jpg" />
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
        </Box>

        <Footer />
        {/* <Box></Box> */}
      </Box>
    </>
  );
};

export default Home;
