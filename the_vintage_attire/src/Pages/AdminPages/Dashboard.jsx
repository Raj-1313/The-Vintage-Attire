import { Box,Text,Flex,Button,Image, useDisclosure,Modal,ModalOverlay,ModalHeader,ModalContent,ModalCloseButton,ModalBody,Input, Table, Thead, Tr, Th, Tbody, Td, Img } from '@chakra-ui/react'
import React from 'react'
import "./Dashboard.css"
import {BsTagsFill} from 'react-icons/bs'
import {FaRupeeSign,FaUserAlt} from 'react-icons/fa'
import {CiDiscount1} from 'react-icons/ci'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"


const Dashboard = () => {
  const {isOpen,onOpen,onClose}=useDisclosure()
  const [adminProfile,setAdminProfile]=useState("")
  const [previewData,setPreviewData]=useState("")
  const [firstname,setFirstName]=useState("")
  const [lastname,setLastName]=useState("")
  const [role,setRole]=useState("")
  const [avtar,setAvtar]=useState("")



// Fetching Admin Profile data from here

  const getProfile=()=>{
    axios.get("http://localhost:8080/product/men"
    // ,{
    //   headers:{
    //     authorization:`Bearer ${localStorage.getItem("admintoken")}`
      // }
    // }
    )
    .then((res)=>{
      setPreviewData(res.data)
    })
    .catch(function (err){
      console.log(err)
    })
  }

  useEffect(()=>{
   getProfile()
  },[])


  // Update Admin Profile Data Method

const handleUpdate=()=>{
  const payload={
    firstname,
    lastname,
    role,
    avtar
  }
  axios.patch("http://localhost:8080/adminUpdate",payload,{
    headers:{
      authorization:`Bearer ${localStorage.getItem("admintoken")}`
    }
  })
  .then((res)=>{
    console.log(res)
    getProfile()
  })
  .catch(function (err){
    console.log(err)
  })
}


  return (
    <Flex w='100%'>

                       {/*  Profile Section */}

      <Box id='lhsBox' w='16%' h='100vh' p='20px'>
          {
            adminProfile && adminProfile.map((data)=>{
              return(
                <Flex id='titleBox' p='0px 10px' mb='40px' onClick={onOpen} key={data._id}>
                <Image src={data.imgUrl} w='45px' borderRadius='50%'/>
                <Box>
                <Text pl={5} fontWeight='bold'>{data.name}</Text>
                <Text pl={5} >{data.role}</Text>
                </Box>
                </Flex>
              )
            })
          }
              <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Update Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                        <Flex direction="column" gap="10px" mt="50px">
                        <label>First-Name</label>
                        <Input type="text" placeholder="New First Name" value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
                        <label>Last-Name</label>
                        <Input type="text" placeholder="New Last Name" value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
                        <label>Role</label>
                        <Input type="text" placeholder="New Role" value={role} onChange={(e)=>setRole(e.target.value)}/>
                        <label>Profile Photo</label>
                        <Input type="text" placeholder="Enter New Name" value={avtar} onChange={(e)=>setAvtar(e.target.value)}/>
                        <Button onClick={handleUpdate} mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Update</Button>
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
                </Modal>

                               {/* Side Bar */}

        <Box id='linkBox'>
          <Flex id='usersBox' p='7px 17px' className='linkItem linkActive'>
          <FaUserAlt/>
          <Text pl='15px'>Users</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem'>
          <BsTagsFill />  
          <Text pl='15px'>Products</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem'>
          <FaRupeeSign/>  
          <Text pl='15px'>Orders</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem'>
          <CiDiscount1/>
          <Text pl='15px'>Discounts</Text>
          </Flex>
        </Box>
      </Box>


          {/*     Right hand Side From Here    */}

      <Box id='rhsBox' w='84%' ml='16%' h='auto'> 
        <Box id='navbarBox'  p='0px 40px' >
          <Flex justifyContent='space-between' pt={3} mb={3}>
            <Text fontWeight='bold'>Vinto Admin</Text>
            <Button _hover={{bg:"rgb(134, 130, 238)",color:"white"}} mb={2} >Log Out</Button>
          </Flex>
        </Box>

      <Box id='rhsBody' m='30px' p='30px'  >
<Table size='sm' variant='striped'  colorScheme='telegram' >
  <Thead>
    <Tr>
      <Th>Id</Th>
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
    {
      previewData && previewData.map((data)=>{
        return(
          <Tr key={data._id} border='1px sold green' maxH='50px'>
      <Td border='1px solid red' maxW='20%' overflow='hidden'  >{data._id}</Td>
      <Td>    
          
        <Img url="https://www.jcrew.com/s7-img-facade/J1785_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"/>
       
         </Td>
      <Td>{data.name}</Td>
      <Td>{data.type}</Td>
      <Td>{data.category}</Td>
      <Td>{data.price}</Td>
      <Td>{data.discounted_price}</Td>
      <Td  border='1px solid ' >
        <Box maxH='81px' overflowY='hidden'>
<Text>

        {data.description}
</Text>
        </Box>
        
        </Td>
    </Tr>
    )})} 
  </Tbody>
</Table>
      </Box>
      </Box>
    </Flex>
  )
}

export default Dashboard
