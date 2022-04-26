const initialState = {
    items:[]
}

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case 'addItem': {

            return {
                ...state,
                items: [...state.items, action.payload],
            }
        }
        case 'deleteItem': {
            console.log("item deleted");
        }
        case 'editItem': {
            console.log("item edited");
        }
        default:
            return state
    }
}