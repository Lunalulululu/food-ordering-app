import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  console.log("in meals_item form");
  console.log(props.id);
  return (
    <div className={classes.form}>
      <Input
        label={"Amount"}
        input={{
          id: "amount_" + props.id,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "10",
          step: "1",
        }}
      />
      <button>Add +</button>
    </div>
  );
};
export default MealItemForm;
