import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMenData } from '../../Redux/AppReducer/App.actions';

const FilterMenComponent = () => {
    const data = useSelector(store=>store.AppReducer.data);
    const dispatch = useDispatch()
    const [arr,setArr] = useState([]);
   
    
    
    
    
    
    useEffect(()=>{
      const uniqueArr = []
      dispatch(getMenData()).then(response=>setArr(response));
      const unique = arr.filter(element => {
        const isDuplicate = uniqueArr.includes(element.type);
      
        if (!isDuplicate) {
          uniqueArr.push(element.type);
      
          return true;
        }
      
        return false;
      });
      console.log(unique)
    },[])
  return (
    <div>
yes sssssss
    </div>
  )
}

export default FilterMenComponent