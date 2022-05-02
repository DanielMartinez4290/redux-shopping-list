import React, { useState } from "react";
import store from '../store';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditItemModal from "./EditItemModal";


export default function ItemList(props) {

    const [completed, setCompleted] = useState('not-completed');

    const deleteItem = (id) => {
        store.dispatch({ type: 'deleteItem', payload: {'id': id} });
    }

    return <div className="item">
        <Checkbox
            className="itemCheckbox"
            onChange={(e) => {
                //console.log(e.target.value);
                setCompleted('completed');
            }}
        />
        <div className="itemNameDescription">
            <div className={`itemName ${completed}`}>{props.name}</div>
            <div className={`description ${completed}`}>{props.description}</div>
        </div>
        <div className="editItem">
            <EditItemModal
              id={props.id}
              name={props.name}
              description={props.description}
              howMany={props.howMany}
            />
        </div>
        <div className="deleteItem">
            <DeleteIcon onClick={() => deleteItem(props.id) } />
        </div>
    </div>;
}