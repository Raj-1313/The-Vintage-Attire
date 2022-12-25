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
  Button,Modal,  ModalOverlay,  ModalHeader,  ModalContent,  ModalCloseButton,  ModalBody,  Input, Flex, useDisclosure, Grid
} from "@chakra-ui/react";
import { deleteAdminCart,  getAdminCart, patchAdminCart } from "../../Redux/AdminReducer/Admin.action";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";


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
      console.log(data);
      return setPreviewData(data);
    });
  }, []);


if(isLoading){
  return  <Loading/>
}
if(isError){
  return  <h1>Error...</h1>
}


  return (
<>

    <Box  m="30px" p="30px">
     
     
        
        <Grid mt='15' gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} gap='2'>
          {previewData &&
            previewData.map((data) => {
              return (
          <Box w={{base:'40vw',md:"25vw",lg:"15vw"}}   className="cardCart" p='10' textAlign='center'> 

  <Text fontWeight='bold'>{data?.data[0].name}</Text>
                <Text>{data.userMail}</Text>
                <Text>{data.count}</Text>
                <Text>{data?.data[0].category}</Text>
                <Text>₹{data?.data[0].price}</Text>
                <Text>₹{data?.data[0].discounted_price}</Text>
                <Text>{data?.data[0].type}</Text>
              
                <Box>
                   
                    <Button onClick={()=>dispatch(deleteAdminCart(data._id))}>Delete</Button>
          
  </Box>
</Box>
              );
            })}
        </Grid>
     
    </Box>
    </>
  );
};

export default (AdminCart);
