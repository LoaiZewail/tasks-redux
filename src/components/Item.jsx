import React from "react";
import { useDispatch} from "react-redux";
import { addTextToInput, removeItem, updateItem } from "../redux/Actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import classes from "./Item.module.css";

const Item = (props) => {
  const dispatch = useDispatch();

  const { id, name } = props;

  const updateHandler = () => {
    props.setInputValue(name);
    dispatch(updateItem(id));
    dispatch(addTextToInput(name));
  };

  const removeHandler = () => {
    dispatch(removeItem(id));
    props.showAlert(true, 'danger', 'Item Removed!')
  };

  return (
    <div className={classes.item}>
      <p className={classes.text}>{name}</p>
      <div>
        <FontAwesomeIcon
          icon={faEdit}
          className={classes.edit}
          onClick={updateHandler}
        />

        <FontAwesomeIcon
          icon={faTrash}
          className={classes.delete}
          onClick={removeHandler}
        />
      </div>
    </div>
  );
};

export default Item;
