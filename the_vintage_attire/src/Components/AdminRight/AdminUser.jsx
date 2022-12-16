import React, { useEffect, useState } from 'react'
import {  Box,  Text, Table,  Thead, Tr,  Th,  Tbody,  Td,  Img, Button, Select} from "@chakra-ui/react";
import {deleteAdminUser, getAdminUser, updateAdminUser} from "../../Redux/AdminReducer/Admin.action"
import { useDispatch } from "react-redux";
const AdminUser = () => {
    
    const [previewData, setPreviewData] = useState([]);
    const [category, setValue] = useState("");
    const dispatch= useDispatch()

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
          console.log(data);
          return setPreviewData(data)
        }) ;
      }, []);



  return (
    <Box id="bodyComponent" m="30px" p="30px">
          <Table size="sm" variant="striped" colorScheme="telegram">
            <Thead>
              <Tr>
                
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Category</Th>               
                <Th>Change To Admin</Th>               
                <Th>Admin</Th>
              </Tr>
            </Thead>
            <Tbody>
              {previewData &&
                previewData.map((data) => {
                  return (
                    <Tr key={data._id} border="1px sold green" maxH="50px">
                       <Td>{data.name}</Td>
                      <Td>{data.email}</Td>
                      <Td>{data.category}</Td>
                      <Td><Select onChange={({target})=> setValue(target.value)}>
                        <option >User</option>
                        <option value="Admin">Admin</option>
                        </Select></Td>
                     
                      <Td>   <Button disabled={category!="Admin"} onClick={()=>handleUpdate(data._id)}>Save</Button>
                    <Button onClick={()=>dispatch(deleteAdminUser(data._id))}>Delete</Button></Td>
                      <Td>
                       
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </Box>
  )
}

export default AdminUser
