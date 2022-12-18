import { Box, Flex, Image, Text, Link, Grid, Button } from "@chakra-ui/react";
import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterMenComponent from "../../Components/FilterComponents/FilterMenComponent";
import Navbar from "../../Components/Navbar/Navbar";
import FilterMenList from "../../Components/FilterList/FilterMenList";
import { motion } from "framer-motion";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
const MensPage = () => {
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
        <Box w="full" display="flex" flexDirection="column" mb="1rem" mt='1rem' border={'1px solid black'}>
          <Box
            display={"flex"}
            w="30%"
            border="1px solid black"
            mb=".5rem"
            bg={"#E2E8F0"}
            position={'sticky'}
            top='4rem'
          >
            <Box
              w="100%"
              fontFamily="sans"
              fontWeight={"semibold"}
              onClick={() => setFilterComponentText((p) => !p)}
              position={'sticky'}
            >
              {FilterComponentText ? (
                <Box
                  display={"flex"}
                  ml="1rem"
                  w={"90%"}
                  alignItems="center"
                  justifyContent={"space-between"}
              fontSize={"lg"}

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
              fontSize={"lg"}

                  justifyContent={"space-between"}
                >
                  <Text>Show Filter</Text>
                  <GoTriangleDown size={"15px"} />
                </Box>
              )}
            </Box>
          </Box>

          <ProductsWrapper>
            {FilterComponentText && (
              <FilterComponentWrapper>
                <FilterMenComponent />
              </FilterComponentWrapper>
            )}

            {FilterComponentText ? (
              <motion.div style={{ width: "69%" }} animate={{ x: [-300, 0] }}>
                <FilterMenList />
              </motion.div>
            ) : (
              <Box w="100%">
                <FilterMenList />
              </Box>
            )}
          </ProductsWrapper>
        </Box>
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

export default MensPage;