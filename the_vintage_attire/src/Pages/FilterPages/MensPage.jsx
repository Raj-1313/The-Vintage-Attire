import { Box, Flex, Image, Text, Link, Grid, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import FilterMenComponent from "../../Components/FilterComponents/FilterMenComponent";
import Navbar from "../../Components/Navbar/Navbar";

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
        <FilterMenComponent/>
      </Box>
    </>
  );
};

export default MensPage;
