import React from "react";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const price = Math.round(props.price * 100) / 100;
  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </div>
  );
};
export default MealItem;
