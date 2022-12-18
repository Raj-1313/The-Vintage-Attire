import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiMinusSm } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  decrementCartCount,
  getCartData,
  incrementCartCount,
} from "../../Redux/cartReducer/Cart.action";
import styles from "./QtyButton.module.css";

const QtyButton = ({
  prodId,
  userMail,
  value,
  handleIncrement,
  handleDecrement,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.qty_box}>
        <button
          disabled={value === 1}
          onClick={() =>
            dispatch(decrementCartCount(prodId, userMail)).then((res) => {
              dispatch(getCartData(userMail));
            })
          }
          className={styles.qty_box_button}
        >
          <HiMinusSm />
        </button>
        <p className={styles.qty_box_item}>{value}</p>
        <button
          onClick={() =>
            dispatch(incrementCartCount(prodId, userMail)).then((res) => {
              dispatch(getCartData(userMail));
            })
          }
          className={styles.qty_box_button}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default QtyButton;
