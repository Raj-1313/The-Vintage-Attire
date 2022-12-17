import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMenData } from '../../Redux/AppReducer/App.actions';
import {Checkbox} from '@chakra-ui/react'
import styled from 'styled-components';
const FilterMenComponent = () => {
    const data = useSelector(store=>store.AppReducer.data);
    const dispatch = useDispatch()
   
    // console.log(data);
    
   
    // console.log(unique)
    const uniqueArr = []

    const unique = data.filter(element => {
      const isDuplicate = uniqueArr.includes(element.type);
    
      if (!isDuplicate) {
        uniqueArr.push(element.type);
        
        return true;
      }
    
      return false;
    });
    let everyProductTotal = {};
    data.forEach((item,index)=>{
      if(everyProductTotal[item.type]===undefined){
        everyProductTotal[item.type]=1
      }
      else{
        everyProductTotal[item.type]++
      }
    })

    useEffect(()=>{
      dispatch(getMenData());
    },[])
  return (
    <FilterMenComponentWrapper>
      {uniqueArr.map((item,index)=>{
        return <Checkbox  colorScheme='green' key={index}>{item} {`(${everyProductTotal[item]})`}</Checkbox>
      })}
    </FilterMenComponentWrapper>
  )
}

export default FilterMenComponent

const FilterMenComponentWrapper = styled.div`
display:flex;
flex-direction:column;
padding:2rem;
`