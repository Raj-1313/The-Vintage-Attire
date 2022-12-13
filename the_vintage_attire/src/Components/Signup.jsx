import React from 'react'
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
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  // const finalRef = React.useRef(null)


  return (
   
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      

      <Modal
        initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={true}
        // onClose={onClose}
       
      >
        <ModalOverlay />
        <ModalContent textAlign='center' >
          <ModalHeader >Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl className="textInputWrapper">
              {/* <FormLabel>First name</FormLabel> */}
              <Input ref={initialRef} placeholder='Email' type='mail' required="" className="input"  />
            </FormControl>

            <FormControl mt={4} className="textInputWrapper">
              {/* <FormLabel>Last name</FormLabel> */}
              <Input placeholder='Password' type='password' required="" className="input" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Signup
