import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import store from '../store';
import {useSelector} from "react-redux";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function AddItemModal(props) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const items = useSelector((state) => state.itemsReducer.items)


    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [howMany, setHowMany] = useState("");


    const addTask = () => {
        store.dispatch({ type: 'addItem', payload: {'name':itemName, 'description':description} });
        setItemName("");
        setDescription("");
        setHowMany("");
        handleClose();
    }

    const handleChange = (event) => {
        setHowMany(event.target.value);
    };

    return <div id="addItemModal">
        {items.length === 0 && <Button variant="contained" onClick={handleOpen}>
            Add your first item
        </Button>}

        {items.length !== 0 && <Button className="addItemButton" variant="contained" onClick={handleOpen}>
            Add Item
        </Button> }

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div id="shoppingList">SHOPPING LIST</div>
                <div id="modalContent">
                    <div id="addAnItem">Add an item</div>
                    <div id="addYourNewItemBelow">Add your new item below</div>
                    <TextField
                        id="itemName" label="Item Name" variant="outlined"
                        onChange={(e) => {
                            setItemName(e.target.value);
                        }}
                        value={itemName}
                    />
                    <TextField
                        id="itemDescription" label="Description" variant="outlined"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        value={description}
                    />

                    <Select
                        labelId="how-many-select-label"
                        id="how-many-select"
                        value={howMany}
                        label="How Many?"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>


                    <div className="cancelAddTask">
                        <Box m={10}>
                            <Button onClick={handleClose} className="modalCancelButton">Cancel</Button>
                        </Box>
                        <Box m={10}>
                            <Button onClick={addTask} variant="contained">Add Task</Button>
                        </Box>
                    </div>
                </div>
            </Box>
        </Modal>

    </div>;
}
