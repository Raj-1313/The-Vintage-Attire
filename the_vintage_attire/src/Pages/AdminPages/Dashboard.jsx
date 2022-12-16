import {  Box,  Text,  Flex,  Button} from "@chakra-ui/react";
import "./Dashboard.css";
import { BsTagsFill } from "react-icons/bs";
import { FaRupeeSign, FaUserAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import AdminProduct from "../../Components/AdminRight/AdminProduct";
import AdminCart from "../../Components/AdminRight/AdminCart";
import AdminUser from "../../Components/AdminRight/AdminUser";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch= useDispatch()
  // Fetching Admin Profile data from here
  // Update Admin Profile Data Method
  const [productCompo,setProductCompo]= useState("product")
  console.log(productCompo);

 const handleLogout=()=>{
  dispatch()
 }

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
          {/* <Flex id="usersBox" p="7px 17px" className="linkItem">
            <CiDiscount1 />
            <Text pl="15px">Discounts</Text>
          </Flex> */}
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
              onClick={()=>handleLogout}
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
<Box display={`${productCompo=="cart"? "block":"none"}`} >      
      <AdminCart />
      </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
