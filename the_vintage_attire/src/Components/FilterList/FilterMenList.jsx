import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMenData, getMenDatabySearch } from '../../Redux/AppReducer/App.actions';

const FilterMenList = () => {
    // const data = useSelector(store=>store.AppReducer.data);

    // console.log(data)
    //copy from book management
    const books = useSelector(store=>store.AppReducer.data);
    const dispatch = useDispatch();
    const location = useLocation();
    // console.log(location)
    const [searchParams] = useSearchParams();
    // useEffect(()=>{
        
    // },[])

    useEffect(()=>{
        // dispatch(getMenData())
        if(books.length === 0 || location){
            const sortBy = searchParams.get('sort');
            const getSearchParams = {
                params:{
                    type:searchParams.getAll("type"),
                    sort:sortBy ,
                    // _order:sortBy
                }
            }
            dispatch(getMenData(getSearchParams))
        }
    },[location.search])
  return (
    <Box display={'grid'} gridTemplateColumns='repeat(3,1fr)' gap='1rem'>
        {books.map((item,index)=>{
            return <Box key={index} >
                <Box overflow='hidden' >
                <Image src={item.imgUrl} _hover={{ transform: "scale(1.15)", transformOrigin: "50% 50%" }}
                transition="transform .5s"/>
                </Box>

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

