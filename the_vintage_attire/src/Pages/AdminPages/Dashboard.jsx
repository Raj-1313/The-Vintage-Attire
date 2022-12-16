import {  Box,  Text,  Flex,  Button,  Image,  useDisclosure,  
} from "@chakra-ui/react";
import "./Dashboard.css";
import { BsTagsFill } from "react-icons/bs";
import { FaRupeeSign, FaUserAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import AdminProduct from "../../Components/AdminRight/AdminProduct";
import AdminCart from "../../Components/AdminRight/AdminCart";
import AdminUser from "../../Components/AdminRight/AdminUser";


const Dashboard = () => {
  // Fetching Admin Profile data from here


  // Update Admin Profile Data Method

  

  return (
    <Flex w="100%">
      {/*  Profile Section */}

      <Box id="lhsBox" w="16%" h="100vh" p="20px">
        
        
        {/* Side Bar */}

        <Box id="linkBox">
          <Flex id="usersBox" p="7px 17px" className="linkItem linkActive">
            <FaUserAlt />
            <Text pl="15px">Users</Text>
          </Flex>
          <Flex id="usersBox" p="7px 17px" className="linkItem">
            <BsTagsFill />
            <Text pl="15px">Products</Text>
          </Flex>
          <Flex id="usersBox" p="7px 17px" className="linkItem">
            <FaRupeeSign />
            <Text pl="15px">Orders</Text>
          </Flex>
          <Flex id="usersBox" p="7px 17px" className="linkItem">
            <CiDiscount1 />
            <Text pl="15px">Discounts</Text>
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
            >
              Log Out
            </Button>
          </Flex>
        </Box>

      <AdminProduct />
      {/* <AdminUser /> */}
      {/* <AdminCart /> */}
      </Box>
    </Flex>
  );
};

export default Dashboard;
