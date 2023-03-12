import React from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Fragment } from "react";

const CartWidget = (props) => {
  return (
    <Fragment>
      <ShoppingCart color={props.color} fontSize={props.size}></ShoppingCart>
    </Fragment>
  );
};

export default CartWidget;
