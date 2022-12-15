import React, { useState } from "react";
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
  Select,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AuthSignUp } from "../Redux/AuthReducer/Auth_actions";
import {Navigate} from "react-router-dom"

const Signup = () => {
  const [backgr,setBackground]= useState("")
  const {isAuth} = useSelector(store=> store)
   console.log(isAuth);
  const dispatch = useDispatch();
  const [dataSign, setDataSign] = useState({
    name: "",
    password: "",
    email: "",
    country: "",
    mobile: "",
  });
 

  const handleSelect = ({ name, value }) => {
    console.log(value);
    setDataSign({ ...dataSign, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(dataSign);
    if (
      dataSign.email &&
      dataSign.password &&
      dataSign.name &&
      dataSign.country &&
      dataSign.mobile
    ) {
      dispatch(AuthSignUp(dataSign)).then((res)=>{
        alert(res)
        return Navigate("/")
      }).catch((err) => alert(err.message) )
    }
  };

 
  return (
    <>
    
        <Modal isOpen={true} onClose={()=>setBackground((pr)=>!pr)}>
          <ModalOverlay />
          <ModalContent
            p="4"
            textAlign="center"
            bgImage={backgr?"https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg":"https://live.staticflickr.com/65535/50288471026_7a1921ecab_b.jpg"}
            bgSize="cover"
          >
            <ModalHeader
              fontSize="2xl"
              fontWeight="extrabold"
              fontFamily="cursive"
            >
              Sign Up
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6} borderRadius="12">
              <form onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Name"
                  type="text"
                  className="inputSignup"
                  onChange={({ target }) => handleSelect(target)}
                />
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
                <HStack>
                  <Select
                    className="inputSignup"
                    name="country"
                    onChange={({ target }) => handleSelect(target)}
                  >
                    <option>Select Country</option>
                    <option value="India">India</option>
                    <option value="America">America</option>
                    <option value="Russia">Russia</option>
                  </Select>

                  <Input
                    name="mobile"
                    placeholder="Context Number"
                    type="number"
                    className="inputSignup"
                    onChange={({ target }) => handleSelect(target)}
                  />
                </HStack>

                <Button w="full" type="submit" colorScheme="green" size="md">
                  CREATE AN ACCOUNT
                </Button>
              </form>
            </ModalBody>

            <ModalFooter bg="blackAlpha.600" color="white" borderRadius="12">
              {/* <Button onClick={onClose}>Cancel</Button> */}
              <Text fontSize="sm" textAlign="left">
                By clicking <b>"Create an Account"</b>, you agree to our{" "}
                <u>Terms of Use and Privacy Policy</u>, including the Use of
                Cookies and the transfer of your personal information to the
                United States, a jurisdiction that may not provide an equivalent
                level of data protection to the laws in your home country.
              </Text>
            </ModalFooter>
            <hr />
           
          </ModalContent>
        </Modal>
      
    </>
  );
};

export default Signup;


