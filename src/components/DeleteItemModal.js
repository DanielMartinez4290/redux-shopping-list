import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import store from '../store';
import DeleteIcon from "@mui/icons-material/Delete";


export default function DeleteItemModal(props) {

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

    const deleteItem = () => {
        store.dispatch({ type: 'deleteItem', payload: {'id':props.id } });
        handleClose();
    }

    return <div id="deleteItemModal">
        <DeleteIcon onClick={() => handleOpen() } />

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div id="modalContent">
                    <h3 className="deleteItemHeader">Delete Item?</h3>

                    <p>Are you sure you want to delete this item? This can not be undone.</p>

                    <div className="cancelAddTask">
                        <Box sx={{ display: 'inline' }}>
                            <Button onClick={handleClose} className="modalCancelButton">Cancel</Button>
                        </Box>
                        <Box sx={{ display: 'inline' }}>
                            <Button onClick={() => deleteItem() } variant="contained">Delete</Button>
                        </Box>
                    </div>
                </div>
            </Box>
        </Modal>

    </div>;
}
