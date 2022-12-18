import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  lable,
  Heading,
  Image,
  Input,
  ModalFooter,
  Text,
  Textarea,
  useToast,
  Modal, 
  ModalHeader,
  ModalOverlay,
  ModalBody,
  ModalContent
} 
 from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Payment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <>
      <Button 
        display={"block"}
        onClick={()=>setShow(true)}
         >
        Check out
      </Button>

      <Modal isOpen={show} onClose={handleClose}>
              <ModalOverlay />
              <ModalContent> 
        <ModalHeader>
          Payment Details
        </ModalHeader>
        <ModalBody>
          <FormControl >
            <Box mb="3">
              <lable>Card number</lable>
              <Input
                type="number"
                placeholder="enter 16 digits card number"
                autoFocus
                />
            </Box>
            <Box mb="3">
              <lable>CVV</lable>
              <Input
                type="number"
                placeholder="enter 3 digits  CVV"
                autoFocus
                />
            </Box>
            <Box mb="3">
              <lable>Pin</lable>
              <Input
                type="number"
                placeholder="enter 4 digits Pin"
                autoFocus
                />
            </Box>
          </FormControl>          
        </ModalBody>

        <ModalFooter>
          <Button
          w='full'
            onClick={() => {
                setTimeout(()=>{
                    toast({
                          title: "Checking Payment.",
                  description: "Please wait a while this may take time.",
                  status: "loading",
                  position: "top",
                  duration: 1000,
                  isClosable: true,
                })
                },1000)
                setTimeout(()=>{
                    toast({
                          title: "Checking Payment.",
                  description: "We've Placed Your Order.",
                  status: "success",
                  position: "top",
                  duration: 1000,
                  isClosable: true,
                })
                },2000)
               
               setTimeout(()=>{
                    navigate("/");
                          },3000) }
                        }

            >
            Pay
          </Button>
        </ModalFooter>
              </ModalContent> 
      </Modal>
    </>
  );
}