import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Img,
  Button,Modal,  ModalOverlay,  ModalHeader,  ModalContent,  ModalCloseButton,  ModalBody,  Input, Flex, useDisclosure
} from "@chakra-ui/react";
import { deleteAdminCart,  getAdminCart, patchAdminCart } from "../../Redux/AdminReducer/Admin.action";
import { useDispatch, useSelector } from "react-redux";


const AdminCart = () => {
  const [previewData, setPreviewData] = useState("");
  const dispatch = useDispatch();
  // const [dataModel, setModelData] = useState({name:"",count:"",userMail:"",price:"",type:"",discounted_price:"" });
  // const [openModel, setOpenModel] = useState(false);
 const {isLoading,isError}= useSelector(store=>store.AdminReducer)
  
  // const handleSetData=({name,value})=>{
  //   console.log(name);
  //   if(dataModel){
  //     setModelData({...dataModel,[name]:value});
  //   }else{
  //     setModelData({...dataModel,[name]:value});
  //   }
  // }
 


  // const handleUpdate = (data) => {
  //   setModelData({...dataModel,...data})
    
  //   setOpenModel(true)
  // };

  // const handleUpdateInProduct = () => {  
  //     dispatch(patchAdminCart(dataModel)).then(()=>dispatch(getAdminCart()) )      
  //     setOpenModel(false)
  // };
 


  useEffect(() =>{
    dispatch(getAdminCart()).then((data) => {
      return setPreviewData(data);
    });
  }, []);


if(isLoading){
  return  <h1>loading...</h1>
}
if(isError){
  return  <h1>Error...</h1>
}


  return (
<>

    <Box id="bodyComponent" m="30px" p="30px">
     
      <Table size="sm" variant="striped" colorScheme="telegram">
        <Thead>
          <Tr>
           
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Quantity</Th>
            <Th>Category</Th>
            <Th>Price </Th>
            <Th>Discounted Price</Th>
            <Th>Type</Th>
            <Th>Admin Powers</Th>
          </Tr>
        </Thead>
        <Tbody>
          {previewData &&
            previewData.map((data) => {
              return (
                <Tr key={data._id}  maxH="50px">
                <Td>{data?.data[0].name}</Td>
                <Td>{data.userMail}</Td>
                <Td>{data.count}</Td>
                <Td>{data?.data[0].category}</Td>
                <Td>₹{data?.data[0].price}</Td>
                <Td>₹{data?.data[0].discounted_price}</Td>
                <Td>{data?.data[0].type}</Td>
              
                <Td>
                   
                    <Button onClick={()=>dispatch(deleteAdminCart(data._id))}>Delete</Button>
                  </Td>
                </Tr>
                
              );
            })}
        </Tbody>
      </Table>
    </Box>
    </>
  );
};

export default (AdminCart);
