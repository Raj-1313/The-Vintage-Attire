import React, { useEffect, useState } from 'react'
import {  Box,  Text, Table,  Thead, Tr,  Th,  Tbody,  Td,  Img, Button, Select, Grid} from "@chakra-ui/react";
import {deleteAdminUser, getAdminUser, updateAdminUser} from "../../Redux/AdminReducer/Admin.action"
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Loading/Loading';

const AdminUser = () => {
    
    const [previewData, setPreviewData] = useState([]);
    const [category, setValue] = useState("");
    const dispatch= useDispatch()
    const {isLoading,isError}= useSelector(store=>store.AdminReducer)

const handleUpdate=(_id)=>{
const obj={
  category,_id
}

dispatch(updateAdminUser(obj)).then((data)=>{
  console.log(data);
  return setPreviewData(data)
}) ;
}

    useEffect(() => {
        dispatch(getAdminUser()).then((data)=>{
        
          return setPreviewData(data)
        }) ;
      }, []);

      // if(isLoading){
      //   return <Loading/>
      // }
      

  return (
    <Box  m="30px" p="30px">
      <Box w='15%' >
      <Select onChange={({target})=> setValue(target.value)}>
         <option >User</option>
         <option value="Admin">Admin</option>
         </Select>
      </Box>
      <Grid mt='15' gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} gap='2'>
              {previewData &&
                previewData.map((data) => {
                  return (
              <Box p='3' borderRadius="12" w={{base:'40vw',md:"25vw",lg:"15vw"}} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' >
    <Grid  overflow='hidden' h='170px' gap={2} textAlign='center'>
        <p>{data.email}</p>        
       <Text fontWeight='bold' fontFamily='cursive' className="title">{data.name}</Text>
        <p>{data.category}</p>        
        <p>{data.mobile}</p>        
        <Box className="caption">        
        <Button disabled={category!="Admin"} onClick={()=>handleUpdate(data._id)}>Save</Button>
       <Button onClick={()=>dispatch(deleteAdminUser(data._id))}>Delete</Button>     
        </Box>
    </Grid>
</Box>
                  );
                })}
          </Grid>
          {/* </Show> */}
        </Box>
  )
}

export default AdminUser
