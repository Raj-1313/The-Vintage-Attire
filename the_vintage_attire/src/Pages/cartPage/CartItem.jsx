import { CloseButton, Flex, Link, useToast } from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import QtyButton from "./QtyButton";
import {
  deleteCartItem,
  getCartData,
} from "../../Redux/cartReducer/Cart.action";
import { useDispatch } from "react-redux";

export const CartItem = (props) => {
  const toast = useToast()
  const dispatch = useDispatch();
  console.log(props);
  const {
    isGiftWrapping = false,
    name,
    _id,
    imgUrl,
    currency = "INR",
    price,
  } = props.data[0];
  const  id  = props._id

  return (
    <Flex
      pb="5"
      borderBottom="1px solid gray"
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        image={imgUrl}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QtyButton
          value={props.count}
          prodId={_id}
          userMail={props.userEmail}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() =>
            dispatch(deleteCartItem(id)).then(res =>{
              toast({
                title: 'Item deleted from your cart successfully.',
                status: 'success',
                duration: 5000,
                position:"top",
                isClosable: true,
              })
              dispatch(getCartData(props.userEmail))
            })
          }
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QtyButton
          value={props.count}
          prodId={_id}
          userMail={props.userEmail}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
