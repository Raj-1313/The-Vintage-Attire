import React, { useEffect, useState } from 'react'
import {  Box,  Text, Table,  Thead, Tr,  Th,  Tbody,  Td,  Img} from "@chakra-ui/react";
import {getAdminUser} from "../../Redux/AdminReducer/Admin.action"
import { useDispatch } from "react-redux";
const AdminUser = () => {
    
    const [previewData, setPreviewData] = useState("");
    const dispatch= useDispatch()



    useEffect(() => {
        dispatch(getAdminUser()).then((data)=>{
          console.log(data);
          return setPreviewData(data)
        }) ;
      }, [dispatch]);



  return (
    <Box id="rhsBody" m="30px" p="30px">
          <Table size="sm" variant="striped" colorScheme="telegram">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Type</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <Th>Discounted Price</Th>
                <Th>Description</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {previewData &&
                previewData.map((data) => {
                  return (
                    <Tr key={data._id} border="1px sold green" maxH="50px">
                      <Td>
                        <Img url="https://www.jcrew.com/s7-img-facade/J1785_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540" />
                      </Td>
                      <Td>{data.name}</Td>
                      <Td>{data.type}</Td>
                      <Td>{data.category}</Td>
                      <Td>{data.price}</Td>
                      <Td>{data.discounted_price}</Td>
                      <Td border="1px solid ">
                        <Box maxH="81px" overflowY="hidden">
                          <Text>{data.description}</Text>
                        </Box>
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
