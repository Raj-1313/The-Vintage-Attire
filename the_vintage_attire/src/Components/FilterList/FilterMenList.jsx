import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMenData, getMenDatabySearch } from '../../Redux/AppReducer/App.actions';
import ProductCard from '../ProductCard';

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
    <Box display={'grid'} gridTemplateColumns='repeat(3,1fr)' gap='1rem' border='1px solid black'>
        {books.map((item,index)=>{
            return <ProductCard productData={item} key = {index} />
        })}
    </Box>
  )
}

export default FilterMenList

