// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Divider,
//   Heading,
//   Image,
//   Input,
//   Text,
//   Textarea,
//   useToast,
// } from "@chakra-ui/react";

// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { useNavigate } from "react-router-dom";
// export default function Payment({details,totalprice}) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const toast = useToast();
//   const navigate = useNavigate();

//   return (
//     <>
//       <Button
//         display={"block"}
//         variant="btn btn-danger"
//         onClick={handleShow}
//         borderRadius={"100px"}
//         width="200px"
//         margin="auto"
//         marginTop={"20px"}
//         _hover={{ bgColor: "#ff385a" }}
//         color={"white"}
//         bgColor={"#ff385a"}
//         disabled={totalprice==0 || details.address==="" || details.pin==="" ||details.state==="" || details.country===""}
//       >
//         Check out
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Payment Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Card number</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="enter 16 digits card number"
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>CVV</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="enter 3 digits  CVV"
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Pin</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="enter 4 digits Pin"
//                 autoFocus
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             onClick={() => {
//               toast({
//                 title: "Payment successfull.",
//                 description: "We've Placed Your Order.",
//                 status: "success",
//                 position: "top",
//                 duration: 1000,
//                 isClosable: true,
//               });
//               navigate("/store");
//             }}
//             display={"block"}
//             borderRadius={"100px"}
//             width="200px"
//             margin="auto"
//             marginTop={"20px"}
//             _hover={{ bgColor: "#ff385a" }}
//             color={"white"}
//             bgColor={"#ff385a"}
            
//           >
//             Pay
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
