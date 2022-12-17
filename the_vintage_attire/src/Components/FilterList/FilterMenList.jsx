import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'

const FilterMenList = () => {
    const data = useSelector(store=>store.AppReducer.data);

    console.log(data)
  return (
    <Box display={'grid'} gridTemplateColumns='repeat(3,1fr)' gap='1rem'>
        {data.map((item,index)=>{
            return <Box key={index}>
                <Image src={item.imgUrl}/>
                <Flex flexDirection={'column'} >
                    <Text fontSize={'md'}>{item.name}</Text>
                    <Text fontSize={'sm'} textDecoration={'line-through'}>INR {item.discounted_price}</Text>
                    <Text fontSize={'sm'} fontWeight={"bold"}>INR {item.price}</Text>

                </Flex>
            </Box>
        })}
    </Box>
  )
}

export default FilterMenList

