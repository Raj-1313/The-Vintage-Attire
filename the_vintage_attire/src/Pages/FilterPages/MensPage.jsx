import { Box, Flex, Image, Text, Link, Grid, Button } from "@chakra-ui/react";
import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import FilterMenComponent from "../../Components/FilterComponents/FilterMenComponent";
import Navbar from "../../Components/Navbar/Navbar";
import FilterMenList from "../../Components/FilterList/FilterMenList";

const MensPage = () => {
  const navigate = useNavigate();
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

        <ProductsWrapper w='full'>
          <FilterComponentWrapper>

        <FilterMenComponent/>
          </FilterComponentWrapper>

          <MenListWrapper>

      <FilterMenList/>
          </MenListWrapper>
        </ProductsWrapper>
      </Box>
    </>
  );
};

export default MensPage;
const FilterComponentWrapper = styled.div`
width:25%;

border:1px solid black;
`
const MenListWrapper = styled.div`
width:70%;
border:1px solid black;

`
const ProductsWrapper = styled.div`
display:flex;
justify-content:space-between;
`