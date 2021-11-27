import React from 'react';
import Item from './Item';
import { useSelector} from 'react-redux';

function ItemsList(props) {
    const allItems = useSelector(state => state.items);

    return (
        <div>
            {allItems.length > 0 && allItems.map((item,index)=> <Item 
            key={index}
            name={item.name}
            id={item.id}
            setInputValue={props.setInputValue}
            showAlert={props.showAlert}
            />)}
        </div>
    )
}

export default ItemsList;
