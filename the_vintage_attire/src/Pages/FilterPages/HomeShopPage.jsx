import { Box, Flex, Image, Text, Link, Grid, Button } from "@chakra-ui/react";
import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import FilterHomeComponent from "../../Components/FilterComponents/FilterHomeComponent";
import FilterHomeList from "../../Components/FilterList/FilterHomeList";
import Footer from "../../Components/Footer/Footer";
const HomeShopPage = () => {
  const navigate = useNavigate();
  const [FilterComponentText, setFilterComponentText] = useState(true);

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
        border="1px solid lightgray"
      >
        Have a question? We can help.*
      </Flex>
      <Box
        w={"full"}
        textAlign="center"
        justifyContent={"center"}
        fontFamily={"sans"}
        lineHeight="4rem"
      >
        <Text fontSize={"2.75rem"}>The Holiday</Text>
        <Text fontSize={"4.25rem"}>Collection</Text>
      </Box>

      {/* <FilterArea>

      </FilterArea> */}
      <Box w="full" display="flex" flexDirection="column" mb="1rem" mt='1rem'>
        <Box
          display={"flex"}
          w={{base:"10rem",md:"25%"}}
          border="1px solid black"
          mb=".5rem"
          bg={"#E2E8F0"}
          zIndex={{ base:'0',sm:"0",md:'0'}}

          position={'sticky'}
          top='4rem'
        >
          <Box
            w={{base:"90%",md:"100%"}}
            fontFamily="sans"
            fontWeight={"semibold"}
            
            onClick={() => setFilterComponentText((p) => !p)}
            position={'sticky'}
          >
            {FilterComponentText ? (
              <Box
                display={"flex"}
                ml="1rem"
               
                w={{base:"90%",md:"90%"}}
                alignItems="center"
               
                justifyContent={"space-between"}
            fontSize={{base:"sm",md:"lg"}}

              >
                <Text>Hide Filter</Text>
                <GoTriangleUp size={"15px"} />
              </Box>
            ) : (
              <Box
                display={"flex"}
                ml="1rem"
                w={"90%"}
                alignItems="center"
                
                fontSize={{base:"sm",md:"lg"}}

                justifyContent={"space-between"}
              >
                <Text>Show Filter</Text>
                <GoTriangleDown size={"15px"} />
              </Box>
            )}
          </Box>
        </Box>

        <Flex justifyContent={'space-between'} w='full' flexDirection={{base:'column',md:"row"}}>
          {FilterComponentText && (
            <FilterComponentWrapper>
              <FilterHomeComponent />
            </FilterComponentWrapper>
          )}

          {FilterComponentText ? (
            <motion.div style={{ width: "74%",margin:'auto' }} animate={{ x: [-300, 0] }}>
              <FilterHomeList />
            </motion.div>
          ) : (
            <Box w="100%" m={'auto'}>
              <FilterHomeList />
            </Box>
          )}
        </Flex>
      </Box>
    <Footer/>
    </Box>
  </>
  );
};

const FilterComponentWrapper = styled.div`
width: 30%;
transition-duration: 1s;
transition-property: width;
`;

const ProductsWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;

export default HomeShopPage;