import {  Box,  Text,  Flex,  Button, Alert, AlertIcon, WrapItem, Avatar, Grid, Show, useDisclosure,  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  } from "@chakra-ui/react";
import "./Dashboard.css";
import { BsTagsFill } from "react-icons/bs";
import { FaRupeeSign, FaUserAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import AdminProduct from "../../Components/AdminRight/AdminProduct";
import AdminCart from "../../Components/AdminRight/AdminCart";
import AdminUser from "../../Components/AdminRight/AdminUser";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/AuthReducer/Auth_actions";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const dispatch= useDispatch()
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  // Fetching Admin Profile data from here
  // Update Admin Profile Data Method
  const [productCompo,setProductCompo]= useState("product")
  const {isAuth,userDetails,token}= useSelector(store=>store.Auth_reducer)
 const navigate = useNavigate()


 useEffect(()=>{
   if(!token){
     return navigate("/")
    }
    if(userDetails?.category!=="Admin"){
      <Alert status='warning'>
      <AlertIcon />
      Admin's Restricted Area 
    </Alert>
  
      return navigate("/")
    }
  },[dispatch,token])

  return (
    <Grid gridTemplateColumns={{lg:"18% 78%"}} >
      
      {/*  Profile Section */}
<Show above="lg">
      <Box borderRight='1px solid #e5e7eb'  pos='sticky' top='0' left='0'  h="100vh" p="20px">   
          <Grid textAlign='center' mb='20'>

        <WrapItem justifyContent='center' m='20px'>
    <Avatar name={userDetails.name} src='https://bit.ly/tioluwani-kolawole' />
  </WrapItem>
    <Text fontFamily="mono">{userDetails.name}</Text>
    <Text fontFamily="mono">{userDetails.email}</Text>
    <Text fontFamily="mono">{userDetails.mobile}</Text>

          </Grid>
          <Flex p="7px 17px" onClick={()=>setProductCompo("user")} className={`linkItem ${productCompo==="user"? "linkActive":""}`}>
            <FaUserAlt />
            <Text pl="15px" >Users</Text>
          </Flex>
          <Flex  p="7px 17px" className={`linkItem ${productCompo==="product"? "linkActive":""}`} onClick={()=>setProductCompo("product")}>
            <BsTagsFill />
            <Text pl="15px" >Products</Text>
          </Flex>
          <Flex  p="7px 17px" className={`linkItem ${productCompo==="cart"? "linkActive":""}`} onClick={()=>setProductCompo("cart")}>
            <FaRupeeSign />
            <Text pl="15px">Orders</Text>
          </Flex>
  </Box>
      </Show>
     
    



      {/*     Right hand Side From Here    */}

      <Box  h="auto" >
        <Box id="navbarBox">
          <Flex justifyContent="space-around" pt={3} mb={3}>
            <Text fontWeight="bold">Vinto Admin</Text>
            <Flex>
            <Button
              _hover={{ bg: "rgb(134, 130, 238)", color: "white" }}
              mb={2}
              onClick={()=>{dispatch(logout()); navigate("/")}   }
              >
              Log Out
            </Button>   
<Show below="lg">
<Menu>
  <MenuButton
  icon={<HamburgerIcon />}
  color={"grey"}
    as={IconButton}
    aria-label='Options'
    variant='outline'
  />
  <MenuList>
    <MenuItem onClick={()=>setProductCompo("user")} icon={<FaUserAlt />} >
    Users
    </MenuItem>
    <MenuItem icon={<BsTagsFill />}  onClick={()=>setProductCompo("product")}>
    Products
    </MenuItem>
    <MenuItem  onClick={()=>setProductCompo("cart")} icon={<FaRupeeSign />}>
    Orders
    </MenuItem>
    
  </MenuList>
</Menu>
</Show>
                </Flex>

          </Flex>
        </Box>

<Box display={`${productCompo==="product"? "block":"none"}`} >
      <AdminProduct />
</Box>
<Box display={`${productCompo==="user"? "block":"none"}`} >
      <AdminUser />
</Box>
 <Box display={`${productCompo==="cart"? "block":"none"}`} >  
      <AdminCart />
      </Box> 
      </Box>

    </Grid>
  );
};

export default memo(Dashboard);
