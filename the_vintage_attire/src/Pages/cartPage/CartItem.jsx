import { CloseButton, Flex, Link } from "@chakra-ui/react";
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
  const dispatch = useDispatch();
  console.log(props);
  const {
    isGiftWrapping = false,
    name,
    _id,
    imgUrl,
    currency = "INR",
    price,
    onClickDelete,
  } = props.data[0];

  // const handleDecrement = () =>{}
  // const handleIncrement = () =>{}

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
            dispatch(deleteCartItem(_id)).then((res) => {
              dispatch(getCartData(props.userEmail));
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
