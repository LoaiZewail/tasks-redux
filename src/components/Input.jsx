import { useDispatch, useSelector } from "react-redux";
import { addItem, addAfterUpdate } from "../redux/Actions";

import classes from "./Input.module.css";


const Input = (props) => {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.isEditing);

  const generatedId = Math.random().toFixed(4);

  const item = {
    name: props.inputValue,
    id: generatedId,
  };


  const submitHandler = (e) => {
    e.preventDefault();
    if (props.inputValue === '') {
      props.showAlert(true, 'danger', 'Please enter value!');
      return;
    }
    if (isEditing) {
      dispatch(addAfterUpdate(props.inputValue));
      props.showAlert(true, 'success', 'Value Changed');
    } else {
      dispatch(addItem(item));
      props.showAlert(true, 'success', 'Item was added to the list');
    }

    props.setInputValue("");
  };

  const onChangeHandler = (e) => {
    props.setInputValue(e.target.value);
  };

  return (
    <form className={classes.inputContainer} onSubmit={submitHandler}>
      <input
        type="text"
        className={classes.input}
        placeholder="Enter your task !"
        value={props.inputValue}
        onChange={onChangeHandler}
      />

      <button type="submit" className={classes.submitBtn}>
        {!isEditing && "Submit"}
        {isEditing && "Edit"}
      </button>
    </form>
  );
};

export default Input;
