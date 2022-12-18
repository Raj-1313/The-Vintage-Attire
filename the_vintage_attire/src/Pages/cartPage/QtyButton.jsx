import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiMinusSm } from "react-icons/hi";
import styles from "./QtyButton.module.css";

const QtyButton = ({ value, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <div className={styles.qty_box}>
        <button disabled={value===1} onClick={handleIncrement} className={styles.qty_box_button}>
          <HiMinusSm />
        </button>
        <p className={styles.qty_box_item}>{value}</p>
        <button onClick={handleDecrement} className={styles.qty_box_button}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default QtyButton;
