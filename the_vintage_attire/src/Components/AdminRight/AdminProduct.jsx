import React, { memo, useEffect, useState } from "react";
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
import { getAdminProduct } from "../../Redux/AdminReducer/Admin.action";
import { useDispatch } from "react-redux";


const AdminProduct = () => {
  const [previewData, setPreviewData] = useState("");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataModel, setModelData] = useState({});
 
  
  const handleSetData=({name,value})=>{
    console.log(name);
    if(dataModel){

      setModelData({...dataModel,[name]:value});
    }else{
      setModelData({...dataModel,[name]:value});
    }
  }
  console.log(dataModel);
  useEffect(() => {
    dispatch(getAdminProduct()).then((data) => {
      console.log(data);
      return setPreviewData(data);
    });
  }, [dispatch]);


  const handleUpdate = () => {
    dispatch()
      
  };



  return (
<>
<Modal isOpen={true} onClose={onClose} scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody mt="-8">
              <Flex direction="column" gap="10px" mt="50px">
                <label>Name</label>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  // value={firstname}
                  onChange={({target}) => handleSetData(target)}
                />
                <label>Category</label>
                <Input
                  type="text"
                  placeholder="Category"
                  name="category"
                  // value={lastname} 
                  onChange={({target}) => handleSetData(target)}
                />
                <label>Price</label>
                <Input
                  type="text"
                  placeholder="Price"
                  name="price"
                  // value={role}
                  onChange={({target}) => handleSetData(target)}
                />
                <label>Discounted Price</label>
                <Input
                  type="text"
                  placeholder="Discounted_price"
                  name="discounted_price"
                  // value={avtar}
                  onChange={({target}) => handleSetData(target)}
                />
                <label>Description</label>
                <Input
                  type="text"
                  placeholder="Description"
                  name="description"
                  // value={avtar}
                  onChange={({target}) => handleSetData(target)}
                />
                <Button
                  onClick={handleUpdate}
                  mb="25px"
                  color="white"
                  bg="black"
                  _hover={{ bg: "grey" }}
                >
                  Update
                </Button>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>

    <Box id="rhsBody" m="30px" p="30px">
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
                <Tr key={data._id} border="1px sold green" maxH="50px">
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
                    <Button onClick={handleUpdate}>Edit</Button>
                    <Button onClick={()=>console.log(data._id)}>Delete</Button>
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
