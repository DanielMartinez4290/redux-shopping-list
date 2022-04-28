const initialState = {
    items:[]
}

export default function itemsReducer(state = initialState, action) {
    console.log("the action type is %o", action.type);
    switch (action.type) {
        case 'addItem': {
            console.log('add item tripped');
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        }
        case 'deleteItem': {

            console.log('delete item trippedsss');
            return {
                ...state,
                //items: state.items.filter(item => item.id === action.payload.id)
            }
        }
        case 'editItem': {
            console.log("item edited");
        }
        case 'INCREMENT_ASYNC': {
            console.log("increment async tripped");
        }
        case 'INCREMENT': {
            console.log("increment tripped");
        }
        default:
            return state
    }
}