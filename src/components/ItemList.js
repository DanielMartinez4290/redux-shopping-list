import * as React from 'react';
import store from '../store';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemList(props) {

    const editItem = () => {

    }

    const deleteItem = (i) => {
        console.log('the passed in id is %o', i);
        store.dispatch({ type: 'deleteItem', payload: {'id':i} });
    }

    return <div className="item">
        <Checkbox className="itemCheckbox" />
        <div className="itemNameDescription">
            <div className="itemName">{props.name}</div>
            <div className="description">{props.description}</div>
        </div>
        <div className="editItem">
            <EditIcon onClick={editItem} />
        </div>
        <div className="deleteItem">
            <DeleteIcon onClick={deleteItem(props.i)} />
        </div>
    </div>;
}