import { CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import QtyButton from './QtyButton'


export const CartItem = (props) => {
  console.log(props.data[0]);
  const {
    isGiftWrapping=false,
    name,
    quantity=1,
    imgUrl,
    currency="INR",
    price,
    onClickDelete,
  } = props.data[0]

  const handleDecrement = () =>{}
  const handleIncrement = () =>{}

  return (
    <Flex
    pb='5'
    borderBottom='1px solid gray'
      direction={{
        base: 'column',
        md: 'row',
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
          base: 'none',
          md: 'flex',
        }}
      >
        <QtyButton
          value={props.count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={onClickDelete} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QtyButton
          value={quantity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}