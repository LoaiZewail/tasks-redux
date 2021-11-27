import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAllItems } from '../redux/Actions';

import classes from './Button.module.css';

export default function Button() {
    const dispatch = useDispatch();

    return (
        <button className={classes.btn} onClick={()=> dispatch(removeAllItems())}>
            Clear Items
        </button>
    )
}
