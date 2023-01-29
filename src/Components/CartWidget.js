import React from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const CartWidget = (props) => {
  return (
    <>
      <ShoppingCart color={props.color} fontSize={props.size}></ShoppingCart>
    </>
  );
};

export default CartWidget;
