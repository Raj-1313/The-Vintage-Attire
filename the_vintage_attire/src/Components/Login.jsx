import React, {  useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Text,
  Box,
  Alert,
  AlertIcon,
  AlertDescription,
  Grid,
  
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin} from "../Redux/AuthReducer/Auth_actions";
import { useNavigate } from "react-router-dom";
import Loading from '../Components/Loading/Loading'

const Login = () => {
  const [isModelOpen,setModelOpen]= useState(false)
  // const [isSuccessLogin,setSuccessLogin]= useState(false)
  const dispatch = useDispatch();
const navigate = useNavigate()
  const {isLoading,failureAuth} = useSelector(store=>store.Auth_reducer)
  const [credError,setInvalidCred]= useState(false)
  const [dataSign, setDataSign] = useState({password: "", email: ""});
  
  const handleSelect = ({ name, value }) => {
    setDataSign({ ...dataSign, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(dataSign.email && dataSign.password) {
     dispatch(AuthLogin(dataSign))     
     if(!!failureAuth){
       setModelOpen(false)
       return setInvalidCred(true)
     }
    };
    };


  //   if(!!token){
    //     setModelOpen(false)
    //  return   setSuccessLogin(true)
    //   }
  
  // useEffect(()=>{
  //   if(isAuth){
  //     navigate("/")
  //   }  
  // },[isAuth])

  if(isLoading){
    return <Box w='100vw' h='100vh' pos='absolute' top={0} left='0'>
      <Loading/>
      </Box>
  }
  


  return (
    <>
      <Button onClick={()=>setModelOpen(true)}>Sign In</Button>
      <Modal
        isOpen={isModelOpen}
        onClose={()=>setModelOpen(false)}
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
              Dont have an Account? <Box onClick={()=> navigate("/signup")  }>                
                <Text textDecoration={'underline'} _hover={{cursor:'pointer'}}>Signup</Text>              
                </Box>
            </Text>
          </Box>
        </ModalContent>
      </Modal>
      {
credError &&
        <Grid pos='absolute' justifyContent='center' alignItems={'center'} left='0' top='0' w='100vw' h='100vh' bgColor='blackAlpha.700' onClick={()=>setInvalidCred(false)} >
<Box>

      <Alert status='warning' borderRadius='12px'  >
    <AlertIcon />
    <AlertDescription>
    Invalid Credentials or Signup
        </AlertDescription>
  </Alert>
        </Box>
      </Grid>

      }
      {/* {
       isSuccessLogin && 
       <Grid pos='absolute' justifyContent='center' alignItems={'center'} left='0' top='0' w='100vw' h='100vh' bgColor='blackAlpha.700' onClick={()=>setSuccessLogin(false)} >
       <Box>
       <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Login SuccessFul!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for trusting us. Our team will never let You down.
        </AlertDescription>
      </Alert>
      </Box>
      </Grid>
      } */}
    </>
  );
}

export default Login
