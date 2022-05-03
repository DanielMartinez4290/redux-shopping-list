import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import EditItemModal from "./EditItemModal";
import DeleteItemModal from "./DeleteItemModal";

export default function ItemList(props) {
    const [completed, setCompleted] = useState('not-completed');

    return <div className="item">
        <Checkbox
            className="itemCheckbox"
            value={completed}
            onChange={(e) => {
                if (completed ==='completed') {
                    setCompleted('not-completed')
                } else {
                    setCompleted('completed');
                }
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
            <DeleteItemModal
                id={props.id}
            />
        </div>
    </div>;
}