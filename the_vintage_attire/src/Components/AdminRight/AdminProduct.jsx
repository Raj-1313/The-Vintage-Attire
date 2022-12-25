import React, { useEffect, useState } from "react";
import "./Admin.css"
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
import { deleteAdminProduct, getAdminProduct, patchAdminProduct, postAdminProduct } from "../../Redux/AdminReducer/Admin.action";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";


const AdminProduct = () => {
  const [previewData, setPreviewData] = useState("");
  const dispatch = useDispatch();
  const [dataModel, setModelData] = useState({_id:null,imgUrl:"",name:"",category:"",type:"",price:0,description:"",discounted_price:0 });
  const [openModel, setOpenModel] = useState(false);
  const [isUpdateToPost, setUpdateToPost] = useState(false);
 const {isLoading,isError}= useSelector(store=>store.AdminReducer)
  
  const handleSetData=({name,value})=>{
    console.log(name);
    if(dataModel){
      setModelData({...dataModel,[name]:value});
    }else{
      setModelData({...dataModel,[name]:value});
    }
  }
 


  const handleUpdate = (data) => {
    setModelData({...dataModel,...data})
    setUpdateToPost(false)
    setOpenModel(true)
  };

  const handleUpdateInProduct = () => {
    if(isUpdateToPost){
          if(dataModel.imgUrl && dataModel.name){
            if(dataModel.price && dataModel.description && dataModel.category){                    
                      dispatch(postAdminProduct(dataModel)).then(()=>dispatch(getAdminProduct()) )      
                      setOpenModel(false)           
            }else{
              alert("Please Fill price , description , category properly")
            }
      
      }else{
        alert("Either check url or Name Properly")
      }
      
    }else{
      dispatch(patchAdminProduct(dataModel)).then(()=>dispatch(getAdminProduct()) )      
      setOpenModel(false)
    }

  };
 


  useEffect(() =>{
    dispatch(getAdminProduct()).then((data) => {
      return setPreviewData(data);
    });
  }, []);


// if(isLoading){
//   return <Loading/>
// }


  return (
<>
<Modal isOpen={openModel} onClose={()=>setOpenModel(false)} scrollBehavior="inside">
          <ModalOverlay w='100vw' h='100vh' />
          <ModalContent>
            <ModalHeader>{isUpdateToPost?"Post":"Update"} Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody mt="-8">
              <Flex direction="column" gap="10px" mt="50px">
                <label>Url</label>
                <Input
                  type="url"
                  placeholder="Image Url"
                  name="imgUrl"
                  value={dataModel.imgUrl}
                  onChange={({target}) => handleSetData(target)}
                />
                <label>Name</label>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={dataModel.name}
                  onChange={({target}) => handleSetData(target)}
                />
                <label>Category</label>
                <Input
                  type="text"
                  placeholder="Category"
                  name="category"
                  value={dataModel.category} 
                  onChange={({target}) => handleSetData(target)}
                />
                <label>Type</label>
                <Input
                  type="text"
                  placeholder="Type"
                  name="type"
                  value={dataModel.type} 
                  onChange={({target}) => handleSetData(target)}
                />
                <label>Price</label>
                <Input
                  type="text"
                  placeholder="Price"
                  name="price"
                  value={dataModel.price}
                  onChange={({target}) => handleSetData(target)}
                />
                <label>Discounted Price</label>
                <Input
                  type="text"
                  placeholder="Discounted_price"
                  name="discounted_price"
                  value={dataModel.discounted_price}
                  onChange={({target}) => handleSetData(target)}
                />
                <label>Description</label>
                <Input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={dataModel.description}
                  onChange={({target}) => handleSetData(target)}
                />
                <Button
                  onClick={handleUpdateInProduct}
                  mb="25px"
                  color="white"
                  bg="black"
                  _hover={{ bg: "grey" }}
                >
                  {isUpdateToPost?"Post":"Update"}
                </Button>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>

    <Box  m="30px" p="30px" > 
      <Flex>
        <Button onClick={()=>{
          setUpdateToPost(true)
          setOpenModel(true)
          }} >Post</Button>
      </Flex>
          <Grid gridTemplateColumns={{base:"repeat(2,1fr)",lg:"repeat(4,1fr)",xl:"repeat(5,1fr)"}} gap='2'>
          {previewData &&
            previewData.map((data) => {
              return (
              
                <Box  w={{base:'40vw',md:"25vw",lg:"15vw"}} className="card" maxH='300px' key={data._id} pb='2' >
                <Box className="img" overflow='hidden' >
                <Img objectFit='contain' src={data.imgUrl} alt="not found" />
                </Box>
                  <Box className="info">
                    <Text fontWeight='bold' >{data.name}</Text>
                    <Flex justifyContent='space-around'>
                    <p>{data.category}</p>
                    <p>{data.type}</p>
                    </Flex>
                  </Box>
                  <Flex justifyContent='space-between'gap='3' >
                  <Button size='sm' colorScheme='blue' onClick={()=>handleUpdate(data)}>Edit</Button>
                 <Button size='sm' colorScheme='blue' onClick={()=>dispatch(deleteAdminProduct(data._id))}>Delete</Button>
                  </Flex>
                </Box>      
              );
            })}
      </Grid>
    </Box>
    </>
  );
};

export default (AdminProduct);
