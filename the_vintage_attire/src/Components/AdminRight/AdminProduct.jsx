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
import { deleteAdminProduct, getAdminProduct, patchAdminProduct, postAdminProduct } from "../../Redux/AdminReducer/Admin.action";
import { useDispatch, useSelector } from "react-redux";


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


if(isLoading){
  return  <h1>loading...</h1>
}


  return (
<>
<Modal isOpen={openModel} onClose={()=>setOpenModel(false)} scrollBehavior="inside">
          <ModalOverlay />
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

    <Box id="bodyComponent" m="30px" p="30px">
      <Flex>
        <Button onClick={()=>{
          setUpdateToPost(true)
          setOpenModel(true)
          }} >Post</Button>
      </Flex>
      <Table size="sm" variant="striped" colorScheme="telegram">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Category</Th>
            <Th>Price </Th>
            <Th>Discounted Price</Th>
            <Th>Description</Th>
            <Th>Admin Powers</Th>
          </Tr>
        </Thead>
        <Tbody>
          {previewData &&
            previewData.map((data) => {
              return (
                <Tr key={data._id}  maxH="50px">
                  <Td>

                    <Box>                      
                    <Img objectFit='contain' mixBlendMode='multiply' src={data.imgUrl} alt="not found"   w='100px' h='90px'  />
                    </Box>
                  </Td>
                  <Td>{data.name}</Td>
                  <Td>{data.type}</Td>
                  <Td>{data.category}</Td>
                  <Td>₹{data.price}</Td>
                  <Td>₹{data.discounted_price}</Td>
                  <Td>
                    <Box maxH="81px" maxW="70%" overflowY="hidden">
                      <Text>{data.description}</Text>
                    </Box>
                  </Td>
                  <Td>
                    <Button onClick={()=>handleUpdate(data)}>Edit</Button>
                    <Button onClick={()=>dispatch(deleteAdminProduct(data._id))}>Delete</Button>
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

export default (AdminProduct);
