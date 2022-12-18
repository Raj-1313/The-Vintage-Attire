import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin} from "../Redux/AuthReducer/Auth_actions";
import { useNavigate } from "react-router-dom";
import Loading from '../Components/Loading/Loading'

const Login = () => {
  const { isOpen,onOpen,onClose} = useDisclosure();
  const dispatch = useDispatch();
const navigate = useNavigate()
  const {token,isAuth,isLoading,isError} = useSelector(store=>store.Auth_reducer)
  console.log(isAuth);
  const [dataSign, setDataSign] = useState({   
    password: "",
    email: "",   
  });
  
console.log(dataSign);
  const handleSelect = ({ name, value }) => {
    setDataSign({ ...dataSign, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   if(dataSign.email && dataSign.password) {
     dispatch(AuthLogin(dataSign))
     console.log("completed");
  }
  };

  const handleOpeningSignIn= () => {   
    navigate("/signup")    
 }
  useEffect(()=>{
    if(isAuth){
    navigate("/")
    }

  },[])

  if(isLoading){
    return <Box w='100vw' h='100vh' pos='absolute' top={0} left='0'>
      <Loading/>
      </Box>
  }
  


  return (
    <>
      <Button onClick={onOpen}>Sign In</Button>
      <Modal
        isOpen={isOpen}
        onClose={()=>onClose}
        size="sm"
        >
        <ModalOverlay />
        <ModalContent
          p="4"
          textAlign="center"
          bgImage="https://live.staticflickr.com/65535/50288471026_7a1921ecab_b.jpg"
            bgSize="cover"
                      >
          <ModalHeader
            fontSize="2xl"
            fontWeight="extrabold"
            fontFamily="cursive"
          >
            Sign In
          </ModalHeader>
          <ModalCloseButton onClick={()=>navigate('/')}/>

          <ModalBody pb={6}  borderRadius='12'>
            <form onSubmit={(e)=>handleSubmit(e)}>
              
              <Input
                name="email"
                placeholder="Email"
                type="mail"
                className="inputSignup"
                onChange={({ target }) => handleSelect(target)}
              />

              <Input
                name="password"
                placeholder="Password"
                type="password"
                className="inputSignup"
                onChange={({ target }) => handleSelect(target)}
              />
        
              <Button w='full'  type="submit" colorScheme="green" size="md" >
                Login Now
              </Button>
            </form>
          </ModalBody>

          <ModalFooter  bg='blackAlpha.600' color='white'  borderRadius='12'>
            {/* <Button onClick={onClose}>Cancel</Button> */}
            <Text fontSize="sm" textAlign="left">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </Text>
          </ModalFooter>
          <hr />
          <Box m="4" bg='blackAlpha.600' color='white' borderRadius='12'>
            <Text>
              Dont have an Account? <Box onClick={()=>handleOpeningSignIn()}>                
                <Text textDecoration={'underline'} _hover={{cursor:'pointer'}}>Signup</Text>              
                </Box>
            </Text>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login
