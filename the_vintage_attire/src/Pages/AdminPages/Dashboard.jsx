import {  Box,  Text,  Flex,  Button, Alert, AlertIcon} from "@chakra-ui/react";
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

const Dashboard = () => {
  const dispatch= useDispatch()
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
    <Flex w="100%">
      {/*  Profile Section */}

      <Box id="lhsBox" w="16%" h="100vh" p="20px">
        
        
        {/* Side Bar */}

        <Box id="linkBox">
          <Flex id="usersBox" p="7px 17px" onClick={()=>setProductCompo("user")} className={`linkItem ${productCompo=="user"? "linkActive":""}`}>
            <FaUserAlt />
            <Text pl="15px" >Users</Text>
          </Flex>
          <Flex id="usersBox" p="7px 17px" className={`linkItem ${productCompo=="product"? "linkActive":""}`} onClick={()=>setProductCompo("product")}>
            <BsTagsFill />
            <Text pl="15px" >Products</Text>
          </Flex>
          <Flex id="usersBox" p="7px 17px" className={`linkItem ${productCompo=="cart"? "linkActive":""}`} onClick={()=>setProductCompo("cart")}>
            <FaRupeeSign />
            <Text pl="15px">Orders</Text>
          </Flex>
    
        </Box>
      </Box>

      {/*     Right hand Side From Here    */}

      <Box id="rhsBox" w="84%" ml="16%" h="auto">
        <Box id="navbarBox" p="0px 40px">
          <Flex justifyContent="space-between" pt={3} mb={3}>
            <Text fontWeight="bold">Vinto Admin</Text>
            <Button
              _hover={{ bg: "rgb(134, 130, 238)", color: "white" }}
              mb={2}
              onClick={()=>dispatch(logout())}
            >
              Log Out
            </Button>
          </Flex>
        </Box>

<Box display={`${productCompo=="product"? "block":"none"}`} >
      <AdminProduct />
</Box>
<Box display={`${productCompo=="user"? "block":"none"}`} >
      <AdminUser />
</Box>
{/* <Box display={`${productCompo=="cart"? "block":"none"}`} >      
      <AdminCart />
      </Box> */}
      </Box>
    </Flex>
  );
};

export default memo(Dashboard);
